const challengeItems = document.querySelector('.challenges')

async function fetchData() {
          const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
          const data = await res.json();
          data.challenges.forEach(challenge => {
            //console.log(challenge.title)
            let actionText = '';
             if (challenge.type === 'online') {
             actionText = 'Take challenge online';
             } else if (challenge.type === 'onsite') {
              actionText = 'Book this room';
          }
            challengeItems.innerHTML += `
            <div>
            <img src='${challenge.image}' alt='' class=''> 
            <h2 class="">${challenge.title}</h2>
            <h4 class="">${challenge.description}</h4> 
            <h5 class="">${challenge.type}</h5>
            <p class="">${challenge.minParticipants}</p>
            <p class="">${challenge.maxParticipants}</p>
            <p class="">${challenge.rating}</p>
            <p class="">${challenge.labels}</p>
            <h5 class="">${actionText}</h5>
            </div>
            `
          });
          }
          
          fetchData();
          