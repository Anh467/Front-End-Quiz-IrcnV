var questionTotal = [
  {
      question: "Trái Đất là hành tinh thứ mấy trong Hệ Mặt Trời?",
      answer: [
          {
              value: "Hành tinh thứ 1",
              isCorrect: true
          },
          {
              value: "Hành tinh thứ 2",
              isCorrect: false
          },
          {
              value: "Hành tinh thứ 3",
              isCorrect: true
          },
          {
              value: "Hành tinh thứ 4",
              isCorrect: false
          }
      ]
  },
  {
      question: "Trái Đất có mặt trời ở giữa không?",
      answer: [
          {
              value: "Có",
              isCorrect: false
          },
          {
              value: "Không",
              isCorrect: true
          }
      ]
  },
  {
      question: "Bao nhiêu ngày trong một năm?",
      answer: [
          {
              value: "365",
              isCorrect: true
          },
          {
              value: "366",
              isCorrect: false
          },
          {
              value: "360",
              isCorrect: false
          }
      ]
  },
  {
      question: "Mặt Trời có trái đất?",
      answer: [
          {
              value: "Có",
              isCorrect: true
          },
          {
              value: "Không",
              isCorrect: false
          }
      ]
  },
  {
      question: "Loài chim nào có khả năng bay ngược?",
      answer: [
          {
              value: "Kiwi",
              isCorrect: true
          },
          {
              value: "Đại bàng",
              isCorrect: false
          },
          {
              value: "Chim cánh cụt",
              isCorrect: false
          }
      ]
  },
  {
      question: "Con người có thể thở dưới nước không?",
      answer: [
          {
              value: "Có",
              isCorrect: false
          },
          {
              value: "Không",
              isCorrect: true
          }
      ]
  },
  {
      question: "Bao nhiêu quốc gia trên thế giới?",
      answer: [
          {
              value: "195",
              isCorrect: false
          },
          {
              value: "206",
              isCorrect: true
          },
          {
              value: "180",
              isCorrect: false
          }
      ]
  },
  {
      question: "Ngôn ngữ phổ biến nhất trên thế giới là gì?",
      answer: [
          {
              value: "Tiếng Anh",
              isCorrect: true
          },
          {
              value: "Tiếng Trung",
              isCorrect: false
          },
          {
              value: "Tiếng Tây Ban Nha",
              isCorrect: false
          }
      ]
  },
  {
      question: "Đâu là hành tinh lớn nhất trong Hệ Mặt Trời?",
      answer: [
          {
              value: "Sao Mộc",
              isCorrect: false
          },
          {
              value: "Sao Thổ",
              isCorrect: false
          },
          {
              value: "Sao Mộc",
              isCorrect: false
          },
          {
              value: "Sao Hỏa",
              isCorrect: true
          }
      ]
  },
  {
      question: "Bao nhiêu chữ cái trong bảng chữ cái tiếng Anh?",
      answer: [
          {
              value: "24",
              isCorrect: false
          },
          {
              value: "26",
              isCorrect: true
          },
          {
              value: "28",
              isCorrect: false
          }
      ]
  }
];


function getCarouselIndicatorsButton(i){
  if(i == 0)
    return `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" class="active" aria-current="true" aria-label="Slide ${i+1}"></button>`;
  return `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" aria-label="Slide ${i+1}"></button>`;
}
function getAnswerP(pList, check){
  var temp = ""
  if(!check)
      for(let i = 0; i < pList.length; i++)
        temp += `<p>${String.fromCharCode(65 + i)}. ${pList[i].value}</p>`
  else{
    for(let i = 0; i < pList.length; i++)
      if(pList[i].isCorrect)
        temp += `<p>${String.fromCharCode(65 + i)}. ${pList[i].value}</p>`
  } 
  return temp
}
function getCarouselItemDiv(input, i){
  var pList= input.answer
  var question= input.question
  return `<div class="carousel-item ${i == 0 ? "active" : ""} w-100 h-100 " style="background-color: black;">     
          <div class="w-100 h-100 d-flex align-items-center justify-content-center flip-card">
            <div class="flip-card-inner ">
              <div class="flip-card-front w-100 h-100 d-flex align-items-center justify-content-center">
                <div class="mx-auto " style="width: 90%; margin-bottom: 0;">
                  <p style="color: azure; margin: 0px 0px 10px 0px;">${question}</p>
                  ${getAnswerP(pList, false)}
                </div>
              </div>
              <div class="flip-card-back w-100 h-100 d-flex align-items-center justify-content-center">
                <div class="row" style="display: flex; flex-wrap: wrap;">
                  ${getAnswerP(pList, true)}                                                 
                </div>
              </div>
            </div>
          </div>
        </div>`
}

function loadQuestion(question) {
  var carousel_indicators = document.querySelector(".carousel-indicators");
  var carousel_inner = document.querySelector(".carousel-inner");
  carousel_indicators.innerHTML = "";
  carousel_inner.innerHTML = "";

  for (let i = 0; i < question.length; i++) {
    carousel_indicators.innerHTML += getCarouselIndicatorsButton(i);
    carousel_inner.innerHTML += getCarouselItemDiv(question[i], i);
  }
}
addEventListener("load", (event) => {
  loadQuestion(questionTotal)
});