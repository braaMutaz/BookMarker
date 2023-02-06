var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
console.log(siteName,siteUrl)
var bookcontainer =[]
var copy;
if(localStorage.getItem('bookmarker')!=null)
{
  bookcontainer=JSON.parse(localStorage.getItem('bookmarker'))
  displaybook()
}
function addbook()
{
if(document.getElementById('add').innerHTML=='Submit')
{
if(regx()==true)
{
  var bookinfo =
  {
    name:siteName.value,
    Url:siteUrl.value
  }
  bookcontainer.push(bookinfo)
  
  localStorage.setItem('bookmarker',JSON.stringify(bookcontainer))
  displaybook()
  clear()
  console.log(bookcontainer)
}
else
{
  alert('Please enter the first uppercase letter and the number of characters must be from 3 to 8 characters')
}
}
else
{
  var updatebook =
  {
    name:siteName.value,
    Url:siteUrl.value
  }
  bookcontainer.splice(copy , 1 , updatebook)
  displaybook()
  localStorage.setItem('bookmarker',JSON.stringify(bookcontainer))
  document.getElementById('add').innerHTML='Submit'
  clear()
}
}
function displaybook()
{
  cartonna=``
  for( var i=0 ; i<bookcontainer.length ; i++ )
  {
    cartonna+=`
    <tr>
    <td>${bookcontainer[i].name}</td>
    <td><a target="_blank" href="${bookcontainer[i].Url}">${bookcontainer[i].Url}</a></td>
    <td><a target="_blank" href="${bookcontainer[i].Url}"><button class="btn btn-info">Visit</button></a></td>
    <td><button onclick="deleteSite(${i})" class="btn btn-danger">Delete</button></td>
    <td><button onclick="updatebook(${i})" class="btn btn-primary">Update</button></td>
  </tr>
    `
  }
  document.getElementById('tableBook').innerHTML=cartonna
}
function deleteSite(bookdelete)
{
 bookcontainer.splice(bookdelete,1)
 localStorage.setItem('bookmarker',JSON.stringify(bookcontainer))
 displaybook()
}
function clear()
{
  siteName.value=''
  siteUrl.value=''
}
function updatebook(i)
{
  copy=i
  siteName.value=bookcontainer[i].name
  siteUrl.value=bookcontainer[i].Url
  document.getElementById('add').innerHTML='Edit'
}
function regx()
{
  var regex = /^[A-Z][a-z]{3,8}$/
  if(regex.test(siteName.value)==true)
  {
    return true
  }
  else
  {
    return false
  }
}
