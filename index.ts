import Email from "./email"
import { renderToString } from 'react-dom/server';

(() => {
    const html = renderToString(Email());
    console.log(html);
    console.log("Done");
})()
