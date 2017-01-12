import { Meteor } from 'meteor/meteor';

import '../imports/api/schedule';
import { Schedule } from '../imports/api/schedule';

Meteor.startup(() => {

});
/*
let count = Schedule.find({}).count();
console.log(count);

if (count < 2 ) {
  console.log('adding');
  Schedule.insert({
    
      location: 'richfield',
      section: 1,
      dayStart: 'monday',
      dayEnd: 'thursday',
      hourStart: '11:30 AM',
      hourEnd: '9:00 PM'
    
  });
  Schedule.insert({
    
      location: 'salina',
      section: 1,
      dayStart: 'monday',
      dayEnd: 'thursday',
      hourStart: '11:30 AM',
      hourEnd: '9:00 PM'
    
  });
  Schedule.insert({
    
      location: 'richfield',
      section: 2,
      dayStart: 'friday',
      dayEnd: 'saturday',
      hourStart: '11:30 AM',
      hourEnd: '10:00 PM'
    
  });
  Schedule.insert({
    
      location: 'salina',
      section: 2,
      dayStart: 'friday',
      dayEnd: 'saturday',
      hourStart: '11:30 AM',
      hourEnd: '10:00 PM'
    
  });
  Schedule.insert({
    
      location: 'richfield',
      section: 3,
      dayStart: 'sunday',
      dayEnd: null,
      closed: false,
      hourStart: '4:00 PM',
      hourEnd: '8:00 PM'
    
  });
  Schedule.insert({
    
      location: 'richfield',
      section: 3,
      dayStart: 'sunday',
      dayEnd: null,
      closed: true,
      hourStart: null,
      hourEnd: null
    
  });
}*/