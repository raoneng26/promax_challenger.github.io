        var tasks = [
            { name: "每日签到", points: 200, rewardPoints: "200", buttonLabel: "领取积分", taskURL: "#", icon: "./images/point/qiandao.svg" },
            { name: "文化圈点赞1篇分享", points: 200, rewardPoints: "200", buttonLabel: "去完成", taskURL: "community.html", icon: "./images/point/dianzan.svg" },
            { name: "体验VR观景3min", points: 300, rewardPoints: "300", buttonLabel: "去完成", taskURL: "vr.html", icon: "./images/point/vr.svg" },
            { name: "乐行农场", points: 500, rewardPoints: "500", buttonLabel: "去完成", taskURL: "#", icon: "./images/point/nongchang.svg" },
        ];
        var score = 0;

        var tasksDiv = document.getElementById('tasks');
        var scoreSpan = document.getElementById('score_point');
        var menu = document.getElementById('menu_point');
        var menuLink = document.getElementById('menuLink');

        tasks.forEach(function(task, index) {
            var taskDiv = document.createElement('div');
            taskDiv.className = 'task';
            var taskIcon = document.createElement('img');
            taskIcon.src = task.icon; // Set the icon source to the task's icon
            taskDiv.appendChild(taskIcon);
            var taskP = document.createElement('p');
            taskP.textContent = task.name;
            taskDiv.appendChild(taskP);
            var completeButton = document.createElement('button');
            completeButton.textContent = task.buttonLabel;
            completeButton.onclick = function() {
                if (task.buttonLabel === "领取积分") {
                    score += task.points;
                    scoreSpan.textContent = score;
                    completeButton.textContent = "已领取";
                    completeButton.style.backgroundColor = "#888";
                    completeButton.disabled = true;
                } else {
                    window.location.href = task.taskURL;
                    if (index !== tasks.length - 1) {
                        setTimeout(function() {
                            completeButton.textContent = "领取积分";
                        }, 3000);
                    }
                }
            };
            taskDiv.appendChild(completeButton);
            var pointsDiv = document.createElement('div');
            pointsDiv.className = 'points';
            pointsDiv.textContent = task.rewardPoints; // 使用任务的奖励积分
            var pointsIcon = document.createElement('img');
            pointsIcon.src = './images/point/coin.svg'; // 你的金币图标
            pointsDiv.appendChild(pointsIcon);
            taskDiv.appendChild(pointsDiv);
            tasksDiv.appendChild(taskDiv);
        });

        menuLink.onclick = function(e) {
            e.preventDefault();
            menu.style.display = 'block';
            overlay.style.display = 'block';
        };

        function closeMenu() {
            menu.style.display = 'none';
            overlay.style.display = 'none';
        }
