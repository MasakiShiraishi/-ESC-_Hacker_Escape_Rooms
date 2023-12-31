class ChallengeManager {
          constructor() {
            this.challengeItems = document.querySelector('.challenges');
          }
        
          async fetchData() {
            try {
              const data = await this.fetchChallenges();
              data.challenges.forEach(challenge => {
                this.createChallengeItem(challenge);
              });
            } catch (error) {
              console.error('Error fetching challenges:', error);
            }
          }
        
          async fetchChallenges() {
            const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
            return await res.json();
          }
        
          createChallengeItem(challenge) {
            let actionText = '';
            let networkedText = '';
            let onsiteOnlineText = '';
        
            if (challenge.type === 'online') {
              actionText = 'Take challenge online';
              networkedText = ' (networked)';
              onsiteOnlineText = '(online)';
            } else if (challenge.type === 'onsite') {
              actionText = 'Book this room';
              networkedText = '';
              onsiteOnlineText = '(on-site)';
            }        
           
        
            this.challengeItems.innerHTML += `
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
            ;
          }
        }
        
        const challengeManager = new ChallengeManager();
        challengeManager.fetchData();
        