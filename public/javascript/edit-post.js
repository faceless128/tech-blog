async function editFormHandler(event) {
  event.preventDefault();
  const post_title = document.querySelector('input[name="post-title"]').value.trim();
  const post_data = document.querySelector('textarea[name="post-data"]').value.trim();

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  if (post_title) {
    const response = await fetch('/api/posts/' + post_id , {
      method: 'PUT',
      body: JSON.stringify({
        title: post_title,
        post_data: post_data
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);