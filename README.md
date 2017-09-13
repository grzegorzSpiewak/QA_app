## A. Informations

App to make QA test faster with Next.js and React. For more informations visit: https://github.com/zeit/next.js/#setup

## B. Installing project instructions:

   1. Download repository.
   2. Get to to project folder in console and type `npm install` then `npm run dev`
   3. The project runs on http://localhost:3000/
   4. To build static files type in `npm run build` - which crates and populates "Out" folder

## C. Structure

1. Components - Elements for App
2. Data - object with information for components (testSuite, app content)
3. Pages - "Smart components"
4. Static - CSS files

## D. Idea

On first page user is able to select required testSuite and select condition for test (logged in, selected TV provider etc).
After clicking button he will be redirected to page with selected testSuite. Here he will paste results from Charles and validate
the presence of required variables. The result will display after clicking test button.
