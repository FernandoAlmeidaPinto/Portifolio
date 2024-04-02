export function getDateExperience(data?: Date) {
  if (!data) return undefined
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let year = data.getFullYear();
  let month = data.getMonth() + 1;

  return `${months[month]}/${year}`
}
