# Playwright Visual Testing capabilities 

## Introduction 

This repo is dedicated to showcase that how easy it would be to apply visual testing on web application using playwright. It also gives the examples where visual testing would be more advantage over doing functional testing. This repo uses only playwright and chance on node. Playwright only support visual testing with Node version. 

Playwright takes a screenshot first time with an error if the expected screenshot is missing and later if the expected screenshot already exists in the expected repository. it compares with already saved screenshot on the folder. There in only one who is responsible for all visual testing.

```await expect(page).toHaveScreenshot('expectedScreenshot.png')```

https://playwright.dev/docs/test-snapshots

## Examples 

The list of examples to show the visual testing

### Browsers 

It would be good idea to start testing home page layout on different browsers. it saves precious time of manual testing. There are two possibilities. 

- Testing UI layout on multiple browsers against one common expected UI layout 
- Testing UI layout of every browser type of its own expected UI layout screen.  

Refer example in browser.spec.ts. It takes screenshot of every browser (Firefox, Chrome, Safari) with mobile view

### Slider on Web application 
Different screens and contexts can be displayed on website using slider. User either can simply drags the slides or chooses the next or previous button. Visaul comparision can be helpful to test every slide visual. 

Refer example in drag-and-drop.spec.de. it slides every screen and takes the screenshot to perform the visual comparision of everyslide 

### Scroll animations 
In this modern time, Web development is advances and uses complex animation to give outstanding effects. to test animation, playwright support to record videos. It is very easy to play video rather than perform complex action again and again. 

Refer scroll-animation.spec records two videos. one is the scroll animation of a websites from top to bottom and other is a automation slider. Bugs and defects can be easily identified by playing the videos 

### Screensize 
Visual testing can also be helpful taking screenshots on multiple screensize. it would be more easy to make sure that layout is consistant in web application. 

Playwright supports configuration of a list of devices with different screensizes. by calling devices names, their viewports can be set. Refer size.spec.ts 

### Visual comparions 
Playwright supports different ways to perform visual comparision 
- Fullscreen - Fullscreen is compared with expect screenshot 

- Clip - A specific part of screen can be compared.here is the example where starting point with size can be given

```await expect(page).toHaveScreenshot('clip.png', { clip: { x: 15, y: 15, width: 300, height: 600 } }```

- Carat 

Sometimes curson blink to showcase the focus on the screen. this focus can also be ignore while perfoming visual comparision 

```await expect(page).toHaveScreenshot('caret.png', { caret: 'hide' });```

- Masking 

Certain Area can be ignored on the screen by masking. A locator needs to passed to ignore this specific part of the screen. Mask color can also be given

```await expect(page).toHaveScreenshot('mask.png', { mask: [page.locator(".circle")], maskColor:"yellow" });```

- MaxDiffRation

A Tolerance percentage can be gives while comparing the screen. After comparision if changes are more than this percent, the test will fail 

- MaxDiff

A Tolerance percentage can be also be given in Pixels while comparing the screen. After comparision if changes are more than no. of pixels, the test will fail 

- Omit Backgrouds 

Backgrounds can also be ignored while taking screenshot 

- Animation Off

This example shows that if animation plays and screen changes, playwright has ability to determine that and it never takes the screenshot at first time and gives error

## Target application 

Following applications has been used as an example 
- Nagarro website 
- Local application 

## Updating screenshot 
Expected screenshots can be updated by giving updated flag. please refer scrips section in package.json 


## Features to be done 
Setting up github actions

