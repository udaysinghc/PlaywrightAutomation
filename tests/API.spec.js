const { test, expect } = require('@playwright/test');

// Currents API Configuration
const BASE_URL = 'https://api.currents.dev/v1'; // Replace with your base URL
const API_KEY = 'h0cXebYFyjNT5h9I4552Z6hPAppIc5fEsl7TqM6sFJN0jfwHnH44xyBkCvaW9KqI'; // Replace with your API key

// Utility to make API calls
async function makeApiCall(request, endpoint, method = 'GET', data = null) {
    const response = await request.fetch(`${BASE_URL}/${endpoint}`, {
        method,
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : null,
    });

    if (!response.ok()) {
        console.error(`Error ${response.status()}: ${await response.text()}`);
        throw new Error(`API call to ${endpoint} failed`);
    }
    return await response.json();
}

// Test workflow
test('Currents Workflow: Runs, Instances, and Tests', async ({ request }) => {
    // Step 1: Initiate a Run
    console.log('Step 1: Initiating a new run...');
    const runPayload = {
        name: 'Playwright Test Run',
        framework: 'Playwright',
        reporter: 'html',
        specFiles: ['tests/sample.spec.js'], // Replace with your spec files
    };

    const runData = await makeApiCall(request, 'runs', 'POST', runPayload);
    console.log('Run initiated:', runData);

    const runId = runData.id;
    console.log(`Run ID: ${runId}`);

    // Step 2: Fetch Run Details
    console.log('Step 2: Fetching run details...');
    const runDetails = await makeApiCall(request, `runs/${runId}`);
    console.log('Run details:', runDetails);

    // Step 3: Fetch Instances for the Run
    console.log('Step 3: Fetching instances for the run...');
    const instances = await makeApiCall(request, `runs/${runId}/instances`);
    console.log(`Found ${instances.length} instances:`, instances);

    // Step 4: Fetch Tests for Each Instance
    console.log('Step 4: Fetching tests for each instance...');
    for (const instance of instances) {
        const instanceId = instance.id;
        console.log(`Fetching tests for Instance ID: ${instanceId}`);

        const tests = await makeApiCall(request, `instances/${instanceId}/tests`);
        console.log(`Tests for Instance ID ${instanceId}:`, tests);

        // Example: Log pass/fail status of tests
        tests.forEach(test => {
            console.log(`Test: ${test.name}, Status: ${test.status}`);
        });
    }

    console.log('Workflow completed successfully!');
});
