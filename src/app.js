import axios from "axios";
import cheerio from "cheerio";

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
