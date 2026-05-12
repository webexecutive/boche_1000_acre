import puppeteer from 'puppeteer';

(async () => {
    console.log("🚀 Starting Booking Form Tests...");
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
    const page = await browser.newPage();
    
    try {
        // Log browser console messages to the terminal
        page.on('console', msg => {
            if (msg.type() === 'error') {
                console.log('❌ BROWSER ERROR:', msg.text());
            }
        });

        console.log("Navigating to http://localhost:5173/booking...");
        await page.goto('http://localhost:5173/booking', { waitUntil: 'networkidle2' });

        // Helper function to count validation errors
        const getErrorCount = async () => {
            return await page.evaluate(() => {
                return document.querySelectorAll('.text-red-500, .text-red-600').length;
            });
        };

        // ==========================================
        // TEST 1: Empty Submission
        // ==========================================
        console.log("\n▶️ TEST 1: Empty Submission Validation");
        await page.click('button[type="submit"]');
        await new Promise(resolve => setTimeout(resolve, 1000)); // wait for validation
        
        let errorCount = await getErrorCount();
        if (errorCount > 0) {
            console.log(`✅ PASS: Found ${errorCount} validation errors when submitting empty form.`);
        } else {
            console.log(`❌ FAIL: No validation errors found when submitting empty form.`);
        }

        // ==========================================
        // TEST 2: Invalid Data (Short Pincode, Invalid Email)
        // ==========================================
        console.log("\n▶️ TEST 2: Invalid Data Entry");
        await page.type('input[name="firstName"]', 'A');
        await page.type('input[name="email"]', 'not-an-email');
        await page.type('input[name="pincode"]', '123'); // short pincode
        await page.click('button[type="submit"]');
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const emailError = await page.evaluate(() => {
            const el = Array.from(document.querySelectorAll('.text-red-500')).find(e => e.textContent.toLowerCase().includes('email'));
            return el ? el.textContent : null;
        });

        if (emailError) {
            console.log(`✅ PASS: Invalid email caught: "${emailError}"`);
        } else {
            console.log(`❌ FAIL: Invalid email was not caught.`);
        }

        // ==========================================
        // TEST 3: Pincode Auto-fill
        // ==========================================
        console.log("\n▶️ TEST 3: Pincode Auto-fill");
        // Clear pincode
        await page.click('input[name="pincode"]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        
        console.log("Entering pincode 400001...");
        await page.type('input[name="pincode"]', '400001');
        
        console.log("Waiting 3 seconds for API auto-fill...");
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        const cityValue = await page.$eval('input[name="city"]', el => el.value);
        const stateValue = await page.$eval('input[name="state"]', el => el.value);
        
        if (cityValue && stateValue) {
            console.log(`✅ PASS: Auto-filled City: "${cityValue}", State: "${stateValue}"`);
        } else {
            console.log(`❌ FAIL: Auto-fill did not populate City and State. (City: ${cityValue}, State: ${stateValue})`);
        }

        // ==========================================
        // TEST 4: Full Valid Submission
        // ==========================================
        console.log("\n▶️ TEST 4: Full Valid Submission");
        // Clear fields first
        await page.evaluate(() => {
            document.querySelectorAll('input').forEach(input => input.value = '');
        });

        console.log("Filling form with valid data...");
        await page.type('input[name="firstName"]', 'Test');
        await page.type('input[name="secondName"]', 'User');
        await page.type('input[name="address1"]', '123 Main Street');
        await page.type('input[name="city"]', 'Mumbai');
        await page.type('input[name="state"]', 'Maharashtra');
        await page.type('input[name="pincode"]', '400001');
        await page.type('input[name="email"]', 'test@example.com');
        
        // Handle react-phone-input-2
        await page.type('input[type="tel"]', '9999999999');
        
        // Handle Datepicker (Chakra UI)
        console.log("Selecting dates...");
        await page.click('input[placeholder="Check in"]');
        await page.keyboard.type('10/10/2026');
        await page.keyboard.press('Tab');
        await page.keyboard.type('15/10/2026');
        await page.keyboard.press('Tab');

        console.log("Submitting form...");
        await page.click('button[type="submit"]');
        
        // Wait to see if validation errors pop up
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const validationErrors = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.text-red-500, .text-red-600')).map(e => e.textContent);
        });
        
        if (validationErrors.length > 0) {
            console.log(`❌ FAIL: Form refused to submit due to validation errors:`, validationErrors);
            return;
        }
        
        // Wait for success modal to appear
        try {
            await page.waitForSelector('h3:has-text("Enquiry Submitted!")', { timeout: 5000 });
            console.log("✅ PASS: Success modal appeared! Data successfully submitted.");
        } catch (e) {
            // Check if there's a submit error message instead
            const serverError = await page.evaluate(() => {
                const err = document.querySelector('.text-red-600');
                return err ? err.textContent : null;
            });
            if (serverError) {
                console.log(`❌ FAIL: Server error returned: "${serverError}"`);
            } else {
                console.log(`❌ FAIL: Success modal did not appear within 5 seconds.`);
            }
        }

    } catch (error) {
        console.error("An error occurred during testing:", error);
    } finally {
        console.log("\nTest run complete. Closing browser in 5 seconds...");
        await new Promise(resolve => setTimeout(resolve, 5000));
        await browser.close();
    }
})();
