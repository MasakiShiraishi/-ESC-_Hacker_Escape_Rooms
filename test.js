async function fetchTopRatedChallenges() {
          // Fetching data from the API
          const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
          const data = await res.json();
      
          // Sorting by rating in descending order
          data.challenges.sort((a, b) => b.rating - a.rating);
      
          // Getting the top 3 rated challenges
          const top3Challenges = data.challenges.slice(0, 3);
      
          // Performing suitable operations such as displaying the information
          console.log(top3Challenges);
          // For instance, displaying using forEach
          top3Challenges.forEach(challenge => {
              console.log(`Title: ${challenge.title}, Rating: ${challenge.rating}`);
              // You can similarly process or display other information
          });
      }
      
      fetchTopRatedChallenges();
      
      