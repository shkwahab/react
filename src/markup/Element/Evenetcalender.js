import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

class Evenetcalender extends Component{
	render(){
		
		return(
				
			<FullCalendar 
				plugins={[ dayGridPlugin ]}   initialView="dayGridMonth" 	
				events={[
					{title: 'Business Lunch', date: '2020-10-03', constraint: 'businessHours'},
					{title: 'Meeting',  date: '2020-10-13',  constraint: 'availableForMeeting',  color: '#257e4a'},
					{title: 'Party',  start: '2020-10-29T20:00:00',  },
					{title: 'Conference',   start: '2020-10-18',   end: '2020-10-19',  },
					{start: '2020-10-21', end: '2020-10-24',   color: '#ff9f89'	},
					
					
				]}
				eventContent={renderEventContent}
			/>
						
		)
	}
	
	
}
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
		
      <i>{eventInfo.event.title}</i>
	  
    </>
  )
}

export default Evenetcalender;