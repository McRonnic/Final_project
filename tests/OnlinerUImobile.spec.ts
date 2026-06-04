import 'dotenv/config';
import { test, expect } from '../fixtures/pManager.ts';
import PageManager from '../pages/PageManager.ts'

let pm: PageManager;

test.describe('Onliner UI mobile', () => {
  test.beforeEach(async ({ pm}) => {
    await pm.main.navigate()
  })

  test('Main paige working', async ({ pm }) => {
    
    const response = await pm.main.stat()
    if (response) { 
      await expect(response.status()).toBe(200);
  } else {
      throw new Error('Navigation failed: response is null.');
  }
  })
})
