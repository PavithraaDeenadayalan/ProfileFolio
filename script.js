const users = [
            {
                id: 1,
                name: "Sarah Johnson",
                email: "sarah.johnson@company.com",
                department: "Engineering",
                profileImage: "https://randomuser.me/api/portraits/women/1.jpg"
            },
            {
                id: 2,
                name: "Michael Chen",
                email: "michael.chen@company.com",
                department: "Sales"
            },
            {
                id: 3,
                name: "Emily Rodriguez",
                email: "emily.rodriguez@company.com",
                department: "Marketing"
            },
            {
                id: 4,
                name: "David Thompson",
                email: "david.thompson@company.com",
                department: "Engineering"
            },
            {
                id: 5,
                name: "Lisa Wang",
                email: "lisa.wang@company.com",
                department: "HR"
            },
            {
                id: 6,
                name: "James Wilson",
                email: "james.wilson@company.com",
                department: "Design",
                profileImage: "https://randomuser.me/api/portraits/men/2.jpg"
            },
            {
                id: 7,
                name: "Anna Kowalski",
                email: "anna.kowalski@company.com",
                department: "Design"
            },
            {
                id: 8,
                name: "Robert Garcia",
                email: "robert.garcia@company.com",
                department: "Marketing"
            },
            {
                id: 9,
                name: "Jennifer Lee",
                email: "jennifer.lee@company.com",
                department: "Engineering"
            },
            {
                id: 10,
                name: "Thomas Anderson",
                email: "thomas.anderson@company.com",
                department: "Sales"
            },
            {
                id: 11,
                name: "Maria Santos",
                email: "maria.santos@company.com",
                department: "HR",
                profileImage: "https://randomuser.me/api/portraits/women/4.jpg"
            },
            {
                id: 12,
                name: "Christopher Brown",
                email: "christopher.brown@company.com",
                department: "Design"
            }
        ];

        // DOM elements
        const userGrid = document.getElementById('userGrid');
        const searchInput = document.getElementById('searchInput');
        const departmentFilter = document.getElementById('departmentFilter');
        const noResults = document.getElementById('noResults');
        const totalUsers = document.getElementById('totalUsers');
        const totalDepartments = document.getElementById('totalDepartments');

        // State management
        let filteredUsers = [...users];

        // Initialize the application
        function init() {
            populateDepartmentFilter();
            updateStats();
            renderUsers();
            setupEventListeners();
        }

        // Generate initials from name for profile picture
        function generateInitials(name) {
            return name.split(' ')
                      .map(word => word.charAt(0))
                      .join('')
                      .toUpperCase()
                      .substring(0, 2);
        }

        // Generate consistent color for profile picture based on name
        function generateProfileColor(name) {
            const colors = [
                'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
                'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
            ];
            
            const index = name.length % colors.length;
            return colors[index];
        }

        // Create user card HTML
        function createUserCard(user) {
            const initials = generateInitials(user.name);
            const profileColor = generateProfileColor(user.name);
            
            const profileContent = user.profileImage 
                ? `<img src="${user.profileImage}" alt="${user.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`
                : `<span style="font-size: 2rem; color: white; font-weight: bold;">${initials}</span>`;
            
            const profileStyle = user.profileImage 
                ? 'background: #f0f0f0;' 
                : `background: ${profileColor};`;
            
            return `
                <div class="user-card" data-department="${user.department}">
                    <div class="profile-picture" style="${profileStyle}">
                        ${profileContent}
                    </div>
                    <div class="user-name">${user.name}</div>
                    <div class="user-email">${user.email}</div>
                    <div class="user-department">${user.department}</div>
                    <button class="delete-btn" onclick="deleteUser(${user.id})">Delete</button>
                </div>
            `;
        }

        // Render users to the grid
        function renderUsers() {
            if (filteredUsers.length === 0) {
                userGrid.style.display = 'none';
                noResults.style.display = 'block';
            } else {
                userGrid.style.display = 'grid';
                noResults.style.display = 'none';
                userGrid.innerHTML = filteredUsers.map(user => createUserCard(user)).join('');
            }
        }

        // Populate department filter dropdown
        function populateDepartmentFilter() {
            const departments = [...new Set(users.map(user => user.department))].sort();
            
            departmentFilter.innerHTML = '<option value="">All Departments</option>';
            
            departments.forEach(department => {
                const option = document.createElement('option');
                option.value = department;
                option.textContent = department;
                departmentFilter.appendChild(option);
            });
        }

        // Update statistics
        function updateStats() {
            const departments = new Set(users.map(user => user.department));
            totalUsers.textContent = users.length;
            totalDepartments.textContent = departments.size;
        }

        // Filter users based on search and department
        function filterUsers() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            const selectedDepartment = departmentFilter.value;

            filteredUsers = users.filter(user => {
                const matchesSearch = searchTerm === '' || 
                    user.name.toLowerCase().includes(searchTerm) ||
                    user.email.toLowerCase().includes(searchTerm);
                
                const matchesDepartment = selectedDepartment === '' || 
                    user.department === selectedDepartment;

                return matchesSearch && matchesDepartment;
            });

            renderUsers();
        }

        // Setup event listeners
        function setupEventListeners() {
            // Search input with debouncing
            let searchTimeout;
            searchInput.addEventListener('input', () => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(filterUsers, 300);
            });

            // Department filter
            departmentFilter.addEventListener('change', filterUsers);

            // Clear search when escape is pressed
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    searchInput.value = '';
                    filterUsers();
                }
            });
        }

        // Start the application when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);

    // Add User Function
    function addUser() {
        const name = prompt('Enter full name:');
        if (!name || name.trim() === '') return;
        
        const email = prompt('Enter email address:');
        if (!email || email.trim() === '') return;
        
        const department = prompt('Enter department:');
        if (!department || department.trim() === '') return;
        
        const profileImage = prompt('Enter profile image URL (optional, press Cancel to skip):');
        
        const newUser = {
            id: Math.max(...users.map(u => u.id || 0)) + 1,
            name: name.trim(),
            email: email.trim(),
            department: department.trim()
        };
        
        if (profileImage && profileImage.trim() !== '') {
            newUser.profileImage = profileImage.trim();
        }
        
        users.push(newUser);
        populateDepartmentFilter();
        updateStats();
        filterUsers();
    }

// Delete User Function
function deleteUser(userId) {
    if (confirm('Are you sure you want to delete this user?')) {
        const index = users.findIndex(user => user.id === userId);
        if (index !== -1) {
            users.splice(index, 1);
            populateDepartmentFilter();
            updateStats();
            filterUsers();
        }
    }
}