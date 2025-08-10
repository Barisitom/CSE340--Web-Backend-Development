
      const form = document.getElementById('classificationForm');
      const header = document.querySelector('#nav');

      // Create nav and ul only once
      const nav = document.createElement('nav');
      const ul = document.createElement('ul');
      nav.appendChild(ul);
      header.appendChild(nav);

      form.addEventListener('submit', function(event) {
        event.preventDefault(); // stop page reload

        const value = document.getElementById('classification_name').value.trim();
        if (!value) {
          alert("Please enter a classification name.");
          return;
        }

        // Create li and anchor
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = value;
        a.setAttribute('href', `/classification/${encodeURIComponent(value)}`);
        a.setAttribute('title', `View ${value} classification`);
        
        // Append to nav
        li.appendChild(a);
        ul.appendChild(li);
        
        // Clear input
        form.reset();
      })