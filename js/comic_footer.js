//the footer of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeFooter"
document.querySelector(".writeFooter").innerHTML = `
    <footer align="center">
               
           <div class="icons">
      <a href="https://twitter.com/frostfiresoul"><img class="hover" src="./img/icons/twitter.png" alt="Twitter"></a>
      <a href="https://ko-fi.com/frostfiresoul"><img class="hover" src="./img/icons/kofi.png" alt="KoFi"></a>
      
      </div>
            
    by <a> frostfiresoul </a> 
            
        <p style="margin-top:5px;"><strong>Powered by</strong></p>
        <a href="https://rarebit.neocities.org"><img src="img/rarebitlogo_small.png" height = "30" /></a>
    </footer>
`;
