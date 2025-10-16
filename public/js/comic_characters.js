jQuery(function () {
  jQuery(".showSingle").click(function () {
    $('div[id^="div-"]').hide();
    var target = $(this).attr("target");
    $("#div-" + target).toggle(".hide");
  });
});

function CallId(id) {
  var x = id;
  $(function () {
    var json = {
      Elements: [
        {
          CharName: "Salvia Lamiace",
          BioImage: '<img src="./img/characters/salvia.jpg">',
          HexColor: "#8DBAF3",
          Number: 1,
          Age: "18",
          Height: "6'",
          Gender: "Female",
          Pronouns: "She/Her",
          Birthday: "December 6th, 2002",
          Quote: "Ethereal Cobalt",
          Occupation: "Floris High Student",
          Bio: " A girl with a foreign, almost alien, quality to her. Transferring in shortly after the school year starts, she immediately catches the attention of her class due to her elusive nature. Her family has high expectations of her after her sister's successes. Wonders what it is like to feel. To care. To love.",
        },
        {
          CharName: "Hyacinth Asparas",
          BioImage: '<img src="./img/characters/hyacinth.jpg">',
          HexColor: "#FE9CCB",
          Number: 2,
          Age: "18",
          Height: "5'2",
          Gender: "Trans Female",
          Pronouns: "She/Her",
          Birthday: "May 27th, 2003",
          Quote: "Passionate Rouge",
          Occupation: "Floris High Student",
          Bio: "Someone who chooses to remain distant and put up a facade of caring, but desperately longs for a deeper connection with another. Readied for another mundane year, her life is lit up by a chance encounter with the new transfer student.",
        },
        {
          CharName: "Dianthe Caryophyllus",
          BioImage: '<img src="./img/characters/dianthe.jpg">',
          HexColor: "#F6DD87",
          Number: 3,
          Age: "19",
          Height: "5'9",
          Gender: "Female",
          Pronouns: "She/Her",
          Birthday: "January 13th, 2002",
          Quote: "Vicious Gold",
          Occupation: "Floris High Student",
          Bio: "''A real arrogant woman'' as Gladiolus calls her. Loves to talk down on others jokingly (?) but holds respect for those who can meet her at her level. Has held a rivalry with Gladiolus since childhood." 
        },
        {
          CharName: "Gladiolus Iridas",
          BioImage: '<img src="./img/characters/gladiolus.jpg">',
          HexColor: "#C8E07B",
          Number: 4,
          Age: "19",
          Height: "5'11",
          Gender: "Male",
          Pronouns: "He/Him",
          Birthday: "March 18th, 2002",
          Quote: "Irritable Charteruse",
          Occupation: "Floris High Student",
          Bio: "''Absolutely insufferable'' according to Dianthe. Always tired and indifferent to others' problems, but he's hot so he gets unwanted attention. Stuck competing with Dianthe since they were kids.",
        },
        {
          CharName: "Verbena Bonariensis",
          BioImage: '<img src="./img/characters/verbena.jpg">',
          HexColor: "#D4B8DF",
          Number: 5,
          Age: "17",
          Height: "4'11",
          Gender: "Female",
          Pronouns: "She/Her",
          Birthday: "September 15th, 2003",
          Quote: "Inquisitive Lilac",
          Occupation: "Floris High Student",
          Bio: "An honors student who has gotten bored of the same old same old. Took the chance to change herself up with the start of a new school year, but often falls back into logically thinking. Rather bothersome at times but in a loveable way.",
        },
        {
          CharName: "Aster Calliste",
          BioImage: '<img src="./img/characters/aster.jpg">',
          HexColor: "#E08181",
          Number: 6,
          Age: "18",
          Height: "5'6",
          Gender: "Aster",
          Pronouns: "Aster",
          Birthday: "October 22nd, 2022",
          Quote: "Stellar Garnet",
          Occupation: "Floris High Student",
          Bio: "An anomaly of a person, but Aster is everyone's favorite right? We <i>all</i> love Aster right??. Those eyes tell everything and nothing at the same time. Has very eclectic tastes.",
        },
        {
          CharName: "Hyssop Lamiace",
          BioImage: '<img src="./img/characters/hyssop.jpg">',
          HexColor: "#9B9FFF",
          Number: 7,
          Age: "17",
          Height: "5'10",
          Gender: "Male",
          Pronouns: "He/They",
          Birthday: "April 8th, 2005",
          Quote: "Nonchalant Indigo",
          Occupation: "Plantae Intermediate Student",
          Bio: "As the youngest in the family, he's very laid-back - no one really pays attention to what he's doing. Spends his time playing guitar and going on walks far, far away from his house. Salvia's younger brother.",
        },
        {
          CharName: "Nepeta Lamiace",
          BioImage: '<img src="./img/characters/nepeta.jpg">',
          HexColor: "#61CFEE",
          Number: 8,
          Age: "24",
          Height: "5'5",
          Gender: "Female",
          Pronouns: "She/Her",
          Birthday: "December 8th, 1996",
          Quote: "Quaking Cyan",
          Occupation: "Senior Marketing Lead",
          Bio: "An accomplished and unapproachable career woman with an icy aura. Actually just a sopping wet mess of a 25 year old who everyone mistakes for having it all together. Put on a pedestal by her family, yet feels so far away from them all. Salvia's older sister.",
        },
        {
          CharName: "Camassia Asparas",
          BioImage: '<img src="./img/characters/camassia.jpg">',
          HexColor: "#FF89A8",
          Number: 9,
          Age: "29",
          Height: "5'9",
          Gender: "Male",
          Pronouns: "He/Him",
          Birthday: "July 8th, 1992",
          Quote: "Unceasing Coral",
          Occupation: "Personal Trainer",
          Bio: "A bit of a himbo, but his head is on right when it matters. Cares for his sister where his parents failed - developed a bit of a doting parent complex because of this. Hyacinth's older brother.",
        },
        {
          CharName: "Goro Majima",
          BioImage:
            '<img src="./img/characters/majima.png" style="width:400px;">',
          HexColor: "#ab831f",
          Number: 10,
          Age: "60",
          Height: "6'1",
          Gender: "Male",
          Pronouns: "He/Him",
          Birthday: "May 14th, 1964",
          Quote: "The Mad Dog of Shimano",
          Occupation: "Majima Clan Patriarch",
          Bio: "After losing his eye and the trust of his sworn brother in a botched assassination, Majima clawed his way out of debt and through the ranks of the Yakuza to become Captain of the Shimano Family, where his ferocity and unpredictability in battle earned him the title 'The Mad Dog of Shimano'. He's now the patriarch of the Majima Family, a direct subsidiary of the Tojo Clan.",
        },
      ],
    };
    $.each(json.Elements, function (i, v) {
      if (v.Number == x) {
        document.getElementById("CharName").innerHTML = v.CharName;
        document.getElementById("BioImage").innerHTML = v.BioImage;
        document.getElementById("HexColor").innerHTML = v.HexColor;
        // document.getElementById("Number").innerHTML=v.Number;
        document.getElementById("Quote").innerHTML = v.Quote;
        document.getElementById("Occupation").innerHTML = v.Occupation;
        document.getElementById("Age").innerHTML = v.Age;
        document.getElementById("Height").innerHTML = v.Height;
        document.getElementById("Pronouns").innerHTML = v.Pronouns;
        document.getElementById("Birthday").innerHTML = v.Birthday;
        document.getElementById("Bio").innerHTML = v.Bio;

        // validate HexColor or set fallback
        // https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
        let color = /^#([0-9A-F]{3}){1,2}$/i.test(v.HexColor)
          ? v.HexColor
          : "#e6e6e5";

        // update hexcolorbox background color
        // document.querySelector(".hexcolorbox").style.backgroundColor = color;

        // update modal border and drop shadow
        const modal = document.querySelector(".modal");
        modal.style.filter = `drop-shadow(5px 5px 0px ${color})`;

        const CharName = document.querySelector(".CharName");
        CharName.style.backgroundColor = color;

        const ModalOverlay = document.querySelector(".modal__overlay");
        // Convert hex color to rgba with transparency
        // https://css-tricks.com/converting-color-spaces-in-javascript/
        function hexToRGBA(hex, alpha = 0.5) {
          let r = 0,
            g = 0,
            b = 0;
          if (hex.length === 4) {
            r = "0x" + hex[1] + hex[1];
            g = "0x" + hex[2] + hex[2];
            b = "0x" + hex[3] + hex[3];
          } else if (hex.length === 7) {
            r = "0x" + hex[1] + hex[2];
            g = "0x" + hex[3] + hex[4];
            b = "0x" + hex[5] + hex[6];
          }

          // ${} used to reference variable within a string
          //   return `rgba(${+r},${+g},${+b},${alpha})`;

          // + is used as string concatenation
          return "rgb(" + +r + "," + +g + "," + +b + "," + alpha + ")";
        }

        // console only accepts variables being plugged in 5head
        // console.log(hexToRGBA(color));

        ModalOverlay.style.background = hexToRGBA(color, 0.6);

        const quote = document.querySelector(".quote");
        document.querySelectorAll(".quote").forEach((quote) => {
            quote.style.filter = `drop-shadow(1px 1px 0px ${color})`;

            if ($(window).width() > 1060) {
                quote.style.textShadow = `0px 0px 0 #ffffff00, 0px 0px 0 #ffffff00, 0px 0px 0 #ffffff00, 0px 0px 0 #ffffff00`;

            } else {
                quote.style.textShadow = `-1px -1px 0 ${color}, 1px -1px 0 ${color}, -1px 1px 0 ${color}, 1px 1px 0 ${color}`;

            }
          });
  

        const bioImg = document.querySelector("#BioImage img");
        bioImg.style.border = `2px solid ${color}`;

        const bio = document.querySelector("#Bio");
        
        const largex = document.querySelector(".largex");


        if ($(window).width() > 1060) {
          modal.style.border = `2px solid ${color}`;
          bio.style.filter = `drop-shadow(0px 0px 0px #ffffff)`;
          bio.style.border = `1px solid ${color}`;
          largex.style.color = color;
        } else {
          modal.style.border = `0px solid ${color}`;
          bio.style.filter = `drop-shadow(5px 5px 0px ${color})`;
          bio.style.border = `1px solid ${color}`;
          largex.style.color = `#ffffff`;
        }

        $(window).resize(function () {
          if ($(window).width() > 1060) {
            modal.style.border = `2px solid ${color}`;
            quote.style.textShadow = `0px 0px 0 #ffffff00, 0px 0px 0 #ffffff00, 0px 0px 0 #ffffff00, 0px 0px 0 #ffffff00`;
            bio.style.filter = `drop-shadow(0px 0px 0px #ffffff)`;
            bio.style.border = `1px solid ${color}`;
            largex.style.color = color;

          } else {
            modal.style.border = `0px solid #ffffff00`;
            quote.style.textShadow = `-1px -1px 0 ${color}, 1px -1px 0 ${color}, -1px 1px 0 ${color}, 1px 1px 0 ${color}`;
            bio.style.filter = `drop-shadow(5px 5px 0px ${color})`;
            bio.style.border = `1px solid ${color}`;
            largex.style.color = `#ffffff`;

          }
        });

        //querySelectorAll is built in and selects all matching same CSS class

        document.querySelectorAll(".bubble").forEach((bubble) => {
          bubble.style.border = `1px solid ${color}`;
          bubble.style.filter = `drop-shadow(3px 3px 0px ${color})`;
        });

        $("#DecrementButton").attr("onclick", "CallId(" + (v.Number - 1) + ")");
        $("#IncrementButton").attr("onclick", "CallId(" + (v.Number + 1) + ")");
        return;
      }
    });
  });
}
