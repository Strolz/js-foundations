const forumLatest = 'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Back-End Development', className: 'backend' }
};

function timeAgo(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const diffMs = now - past;
    const diffMinutes = Math.floor(diffMs / 60000);

    if (diffMinutes < 60) {
        return `${diffMinutes}m ago`;
    }

    const diffHours = Math.floor(diffMinutes / 60)
    
    if (diffHours < 24) {
        return `${diffHours}h ago`;
    }

    const diffDays = Math.floor(diffHours / 24)

    return `${diffDays}d ago`;
}

function viewCount(views) {
    if (views < 1000) return views;

    return `${Math.floor(views / 1000)}k`
}

function forumCategory(id) {
    const categoryObj = allCategories[id];

    if (categoryObj) {
        return `<a class="category ${categoryObj.className}" href="${forumCategoryUrl}${categoryObj.className}/${id}">${categoryObj.category}</a>`;
    }

    return `<a class="category general" href="${forumCategoryUrl}general/${id}">General</a>`;

}

function avatars(posters, users) {
  return posters
    .map(poster => {
      const matchedUser = users.find(
        user => user.id === poster.user_id
      );

      const avatar = matchedUser.avatar_template.replace("{size}", 30);

      const avatarSrc = avatar.startsWith("/")
        ? `${avatarUrl}${avatar}`
        : avatar;

      return `<img src="${avatarSrc}" alt="${matchedUser.name}">`;
    })
    .join("");
}

function showLatestPosts(obj) {
  const {users, topic_list} = obj;
  const {topics} = topic_list;

  const postsContainer = document.getElementById("posts-container");

  const rows = topics.map(topic => {
    const {
      id,
      title,
      slug,
      posts_count,
      views,
      bumped_at,
      category_id,
      posters
    } = topic

  postsContainer.innerHTML += `
    <tr>
      <td>
          <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
          ${forumCategory(category_id)}
      </td>

      <td>
        <div class="avatar-container">
          ${avatars(posters, users)}
        </div>
      </td>
      
      <td>
        ${posts_count - 1}
      </td>
      
      <td>
        ${viewCount(views)}
      </td>
      
      <td></td>
    </tr>
  `
  })
}

const fetchData = async () => {

}
