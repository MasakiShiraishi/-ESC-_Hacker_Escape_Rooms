function openFilterPanel() {
          const filterPanel = document.getElementById('filterPanel');
          filterPanel.style.display =  'block' ;
          const filterButton = document.getElementById('filterButton');
          filterButton.style.display = 'none'; 
      }
  
      function closeFilterPanel() {
          const filterPanel = document.getElementById('filterPanel');
          filterPanel.style.display = 'none';
          const filterButton = document.getElementById('filterButton');
          filterButton.style.display = 'block'; 
      }

      
      let challenges = []; // Assuming you have challenges data fetched from an API or elsewhere
      
      async function fetchData() {
          try {
              const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
              const data = await res.json();
              challenges = data.challenges;
              console.log(challenges);
          //     challenges.forEach(challenge => {
          //           console.log(challenge.id);
          //         });
              // Call the filter function after fetching data to initially populate the challenges
              filterChallenges();
          } catch (error) {
              console.error('Error fetching challenges:', error);
          }
}
      

      // Function to filter challenges based on the criteria
      function filterChallenges() {
        
          const onlineChecked = document.getElementById('checkboxOnline').checked;
          const onSiteChecked = document.getElementById('checkboxOnSite').checked;
          const lowRatingElement = document.getElementById('ratingWidgetLow');
          const highRatingElement = document.getElementById('ratingWidgetHigh');
          const tagList = document.querySelectorAll('#tagList li.tag.active');
         
          const searchText = document.getElementById('textInput').value.toLowerCase();
          console.log('onlineChecked:', onlineChecked);
    console.log('onSiteChecked:', onSiteChecked);
    console.log('lowRatingElement:', lowRatingElement);
console.log('highRatingElement:', highRatingElement);
console.log('tagList:', tagList);
    console.log('searchText:', searchText);
          // console.log(searchText);
          // console.log(onlineChecked);
          const filtered = challenges.filter(challenge => {
              const isOnlineMatch = (onlineChecked && challenge.type === 'online');
              const isOnSiteMatch = (onSiteChecked && challenge.type === 'on-site');
              const isRatingMatch = (challenge.rating >= lowRating && challenge.rating <= highRating);
              const isTagsMatch = selectedTags.some(tag => challenge.labels.includes(tag));
              const isSearchTextMatch = (challenge.title.toLowerCase().includes(searchText) || challenge.description.toLowerCase().includes(searchText));
              
              // デバッグ用に各条件の値を出力する
console.log('isOnlineMatch:', isOnlineMatch);
console.log('isOnSiteMatch:', isOnSiteMatch);
console.log('isRatingMatch:', isRatingMatch);
console.log('isTagsMatch:', isTagsMatch);
console.log('isSearchTextMatch:', isSearchTextMatch);
    return (isOnlineMatch || isOnSiteMatch) && isRatingMatch && isTagsMatch && isSearchTextMatch;
});
    
          updateChallengesView(filtered);
          
      }
      
      
      // Function to update the challenges view based on the filtered data
      function updateChallengesView(filteredChallenges) {
          const challengeList = document.querySelector('.challenges');
          const noMatchingChallenges = document.querySelector('.noMatchingChallenges');
          challengeList.innerHTML = '';
         
          if (filteredChallenges.length === 0) {             
              noMatchingChallenges.style.display = 'block'; 
              challengeList.innerHTML = '';
          } else {                    
              noMatchingChallenges.style.display = 'none'; 
              filteredChallenges.forEach(challenge => {
                    console.log(challenge.title);
                  challengeList.innerHTML += `<li>${challenge.title}</li>`;
              });
          }
          
      }
      
      // Call the filterChallenges function when any input changes
      document.querySelectorAll('#filterPanel input').forEach(input => {
          input.addEventListener('change', filterChallenges);
      });

  
      // Assuming challenges data is fetched asynchronously
      // You need to fetch the data and then call the filterChallenges function to initially populate the challenges
      // Assuming this function fetches challenges data asynchronously
      
      document.addEventListener('DOMContentLoaded', function() {
          fetchData(); 
          document.getElementById('textInput').focus();
      });
      
      document.getElementById('textInput').addEventListener('keydown', function(event) {
          if (event.key === 'Enter') {
              filterChallenges(); 
              document.getElementById('textInput').value = "";
             
          }
      });