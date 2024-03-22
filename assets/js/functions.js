/*
    Create Validation Alert
*/
const createAlert = (msg, type="danger") => {
    return `<p class='alert alert-${type} d-flex justify-content-between'>${msg} <button class='btn-close' data-bs-dismiss='alert'></button></p>`;
}



/*
    Check appropreat email address
*/
const isEmail = (email) =>{
    const pattern = /^[a-z0-9\._]{1,}@[a-z0-9]{2,}\.[a-z]{2,4}$/;
    return pattern.test(email);
}


/*
    Check appropriet Mobile number
*/
const isMobile = (phone) =>{
    const pattern = /^(\+0088|8801|01)[0-9]{9}$/;
    return pattern.test(phone);
}


/*
    Create unique ID
*/
const createUniqueId = () => {
  // Generate a random portion
  const randomPart = Math.random().toString(36).substr(2, 5); // Generate a random string and take a substring

  // Generate a timestamp portion
  const timestampPart = Date.now().toString(36).substr(2, 5); // Convert timestamp to base 36 string

  // Concatenate random and timestamp parts
  const uniqueId = randomPart + timestampPart;

  return uniqueId;
}


/*
    Create time ago function
*/
const timeAgo = (createdAt) => {
  const seconds = Math.floor((new Date() - createdAt) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " second ago";
};


