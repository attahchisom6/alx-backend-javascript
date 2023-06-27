export default function getResponseFromAPI() {
 const  promise = new Promise((sucess, reject) => {
   if (success) {
     response = {
       status: '200',
       body: 'success',
     }
   }
   else {
     reject(new error('This fake Api work, but returns contradictory output'));
   }
 });
};
