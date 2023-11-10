import { Page } from "@playwright/test";
let target = 'https://www.nagarro.com/en'

export let gotoNagarro = async (page:Page) =>{
    await page.goto(target,{waitUntil:'networkidle'});
    await page.click('#hs-eu-confirmation-button');
  }

  export let scroll = async (args) => {
    const {direction, speed} = args;
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    const scrollHeight = () => document.body.scrollHeight;
    const start = direction === "down" ? 0 : scrollHeight();
    const shouldStop = (position) => direction === "down" ? position > scrollHeight() : position < 0;
    const increment = direction === "down" ? 50 : -50;
    const delayTime = speed === "slow" ? 200 : 40;
    console.error(start, shouldStop(start), increment)
    for (let i = start; !shouldStop(i); i += increment) {
        window.scrollTo(0, i);
        await delay(delayTime);
    }
  };