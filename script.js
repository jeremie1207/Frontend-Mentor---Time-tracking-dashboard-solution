const dailyLink = document.getElementById('daily');
const weeklyLink = document.getElementById('weekly');
const monthlyLink = document.getElementById('monthly');

const links = [dailyLink, weeklyLink, monthlyLink];

const currentWorkHours = document.getElementById('current-work-hours');
const previousWorkHours = document.getElementById('previous-work-hours');

const currentPlayHours = document.getElementById('current-play-hours');
const previousPlayHours = document.getElementById('previous-play-hours');

const currentStudyHours = document.getElementById('current-study-hours');
const previousStudyHours = document.getElementById('previous-study-hours');

const currentExerciseHours = document.getElementById('current-exercise-hours');
const previousExerciseHours = document.getElementById('previous-exercise-hours');

const currentSocialHours = document.getElementById('current-social-hours');
const previousSocialHours = document.getElementById('previous-social-hours');

const currentSelfCareHours = document.getElementById('current-self-care-hours');
const previousSelfCareHours = document.getElementById('previous-self-care-hours');

async function fetchData(timeframe) {
    try {
        const response = await fetch('./data.json');
        if(!response.ok) {
            throw new Error("Resquest failed");
        }
        const data = await response.json();

        displayData(data, timeframe);

    } catch (error) {
        throw error;
    }   
};

function setActive() {
    const timeframe = this.id;
    for(let link of links) {
        if(this !== link) {
            link.removeAttribute('data-state');
        }
    }

    this.setAttribute('data-state', 'active');
    fetchData(timeframe);
}

function displayData(data, timeframe) {
   const [work, play, study, exercise, social, selfCare] = data;


   currentWorkHours.textContent = work.timeframes[timeframe].current;
   previousWorkHours.textContent = work.timeframes[timeframe].previous;

   currentPlayHours.textContent = play.timeframes[timeframe].current;
   previousPlayHours.textContent = play.timeframes[timeframe].previous;

   currentStudyHours.textContent = study.timeframes[timeframe].current;
   previousStudyHours.textContent = study.timeframes[timeframe].previous;

   currentExerciseHours.textContent = exercise.timeframes[timeframe].current;
   previousExerciseHours.textContent = exercise.timeframes[timeframe].previous;

   currentSocialHours.textContent = social.timeframes[timeframe].current;
   previousSocialHours.textContent = social.timeframes[timeframe].previous;

   currentSelfCareHours.textContent = selfCare.timeframes[timeframe].current;
   previousSelfCareHours.textContent = selfCare.timeframes[timeframe].previous;
}





dailyLink.addEventListener('click', setActive);
weeklyLink.addEventListener('click', setActive);
monthlyLink.addEventListener('click', setActive);

