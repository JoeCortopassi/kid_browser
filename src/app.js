import axios from "axios";
import cheerio from "cheerio";

// Kidz search is tied to a google custom search hidden behind an api,
// what about just using simple.wikipedia and a white list of terms.
// Would need a quick/easy way to add new terms for when they think of
// something new they want to read about
//
// Might also be good to remove the typing aspect all together, and
// just make it a visual search that they can scroll through. They
// can drill down topically, then have a grid of buttons for each
// subject to read about
const url = "https://search.kidzsearch.com/kzwikisearch.php?q=whale%20shark";
axios
  .get(url)
  .then(response => {
    const $ = cheerio.load(response.data);
    console.log(response.data);
    console.log($);
    const links = $(".gs-title");
    console.log(links.toArray());
  })
  .catch(error => {
    console.log("error", error);
  });
