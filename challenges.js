const challengeItems = document.querySelector('.challenges')

async function fetchData() {
          const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
          const data = await res.json();
          data.challenges.forEach(challenge => {
            //console.log(challenge.title)
            let actionText = '';
             if (challenge.type === 'online') {
             actionText = 'Take challenge online';
             networkedText = ' (networked)';
             onsiteOnlineText = '(online)';
             } else if (challenge.type === 'onsite') {
              actionText = 'Book this room';
              networkedText = '';
              onsiteOnlineText = '(on-site)';
          }
          
          const getStarRating = (rating) => {
            const totalStars = 5;
            const fullStar = '★';
            const halfStar = '<img src="pictures/star-half-outline.svg" alt="Half star" width="20" height="20">';
            const emptyStar = '☆';
        
            const roundedRating = Math.round(rating * 2) / 2;
            const fullStars = Math.floor(roundedRating);
            const hasHalfStar = roundedRating % 1 !== 0;
        
            let stars = fullStar.repeat(fullStars);
        
            if (hasHalfStar) {
                stars += halfStar;
            }
        
            const remainingStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);
        
            if (remainingStars > 0) {
                stars += emptyStar.repeat(remainingStars);
            }
        
            return stars;
        };      
        
       

            challengeItems.innerHTML += `
            <div class="sectionTwo_challenge">
              
               <div class="sectionTwo_div1_width">
                      <img class="sectionTwo_hacker_img" src='${challenge.image}' alt='' width="363" height="219"> 
                      <p class="">${getStarRating(challenge.rating)}</p>
                    <div class="title_onsiteOnline">
                     <h2 class="sectionTwo_title_room">${challenge.title}</h2>
                     <h5 class="">${"&nbsp;" + onsiteOnlineText}</h5>
                    </div>
                   <div class="participants"> 
                     <p class="">${challenge.minParticipants}</p>
                     <p class="">${" -" + challenge.maxParticipants + " participants"}</p>
                     <p class="">${"&nbsp;" + networkedText}</p>
                  </div>
                     <h4 class="sectionTwo_praetera">${challenge.description}</h4>               
                     <p class="">${challenge.labels}</p>
                  <div class="sectionTwo_div3">
                    <button class="sectionTwo_div3_button_book_this_room">
                    ${actionText}</button>
                  </div>            
                </div>
              </div>
            `
          });
          }
          
          fetchData();
          