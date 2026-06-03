require('dotenv').config();
import { test, expect } from '@playwright/test'
import PageManager from '../pages/PageManager.ts'

let pm: PageManager;

test.describe('Onliner UI mobile', () => {
  test.beforeEach(async ({ page }) => {
    pm = new PageManager(page)
    await pm.main.navigate()
  })

  test('Main paige working', async () => {
    
    const response = await pm.main.stat()
    if (response) { 
      await expect(response.status()).toBe(200);
  } else {
      throw new Error('Navigation failed: response is null.');
  }
  })
})
