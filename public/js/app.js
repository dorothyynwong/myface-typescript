
document.addEventListener('click', function(event) {
  if(event.target.id !== 'menuButton' && event.target.id !== "menuPad")
  {
    let menuPad = document.getElementById("menuPad");
    menuPad.setAttribute("class","menuPadHidden");
  }

});

document.addEventListener('keydown', function(event) {
  if(event.key === "Escape")
  {
    let menuPad = document.getElementById("menuPad");
    menuPad.setAttribute("class","menuPadHidden");
  }

});


function changeBackground() {
  // Add your JavaScript here.
  
  document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
};

function displayMenu() {
  let menuPad = document.getElementById("menuPad");
  const displayValue = menuPad.className;
  if (displayValue === "menuPadHidden")  menuPad.setAttribute("class","menuPadShow");
  else  menuPad.setAttribute("class","menuPadHidden");
}

function checkAllInput() {
  const createUserForm = document.getElementById("createUserForm");
  const showSubmit = createUserForm.checkValidity();
  
  const submitButton = document.getElementById("createUserSubmitID");

  if(showSubmit) submitButton.disabled = false;
  else submitButton.disabled = true;
};

document.querySelectorAll('button[id^="like-button-"]').forEach(likeButton => {
  likeButton.addEventListener('click', async function(event) {
    const buttonId = event.target.id;
    const postId = buttonId.split('-')[2];
    const actionUrl = `/posts/${postId}/like/`;
    try {
        const response = await fetch(actionUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            document.getElementById(`like-count-${postId}`).textContent = data.newLikeCount;
        } else {
            console.error('Failed to like the post');
        }
    } catch (error) {
        console.error('Error:', error);
    }
  })
});

document.querySelectorAll('button[id^="dislike-button-"]').forEach(dislikeButton => {
  dislikeButton.addEventListener('click', async function(event) {
    const buttonId = event.target.id;
    const postId = buttonId.split('-')[2];
    const actionUrl = `/posts/${postId}/dislike/`;
    try {
        const response = await fetch(actionUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            document.getElementById(`dislike-count-${postId}`).textContent = data.newDislikeCount;
        } else {
            console.error('Failed to dislike the post');
        }
    } catch (error) {
        console.error('Error:', error);
    }
  })
});

// document.addEventListener("DOMContentLoaded", function() {
//   document.querySelectorAll('form[id^="like-form-"]').forEach(form => {
//         form.addEventListener('submit', async function(event) {
//             const formId = this.id;
//             const postId = formId.split('-')[2];
//             const actionUrl = `/posts/${postId}/like/`;

//             try {
//                 const response = await fetch(actionUrl, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }
//                 });

//                 if (response.ok) {
//                     const data = await response.json();
//                     document.getElementById(`like-count-${postId}`).textContent = data.newLikeCount;
//                 } else {
//                     console.error('Failed to like the post');
//                 }
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         });
//     });

//     document.querySelectorAll('form[id^="dislike-form-"]').forEach(form => {
//       form.addEventListener('submit', async function(event) {
//           const formId = this.id;
//           const postId = formId.split('-')[2];
//           const actionUrl = `/posts/${postId}/dislike/`;

//           try {
//               const response = await fetch(actionUrl, {
//                   method: 'POST',
//                   headers: {
//                       'Content-Type': 'application/json'
//                   }
//               });
//               if (response.ok) {
//                   const data = await response.json();
//                   document.getElementById(`dislike-count-${postId}`).textContent = data.newDislikeCount;
//               } else {
//                   console.error('Failed to dislike the post');
//               }
//           } catch (error) {
//               console.error('Error:', error);
//           }
//       });
//   });
// });