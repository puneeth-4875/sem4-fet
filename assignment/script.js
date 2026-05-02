<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Technical Skill Matrix | Editor</title>
    <style>
        /* --- CSS STYLING --- */
        body {
            margin: 0;
            padding: 40px;
            font-family: 'Segoe UI', sans-serif;
            background: #0b1120;
            color: #e2e8f0;
            display: flex;
            justify-content: center;
        }
       
        .matrix-box {
            background: #111827;
            padding: 25px;
            border-radius: 12px;
            width: 100%;
            max-width: 500px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.4);
        }
       
        h2 {
            color: #a78bfa;
            border-bottom: 1px solid #374151;
            padding-bottom: 8px;
        }
       
        strong {
            color: #c7d2fe;
        }
       
        .skill-item {
            background: #020617;
            margin: 10px 0;
            padding: 10px;
            border-radius: 6px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-left: 4px solid #a78bfa;
        }
       
        .edit-btn {
            background: #a78bfa;
            color: #020617;
            border: none;
            padding: 5px 12px;
            cursor: pointer;
            border-radius: 5px;
            font-size: 12px;
            transition: 0.2s;
        }
       
        .edit-btn:hover {
            background: #c4b5fd;
        }
       
        /* --- NAV LINKS (IMPROVED) --- */
        .nav-links {
            margin-top: 25px;
            text-align: center;
        }
       
        .nav-links a {
            display: block;
            margin: 8px 0;
            padding: 8px;
            color: #a78bfa;
            text-decoration: none;
            border-radius: 6px;
            transition: 0.2s;
        }
       
        .nav-links a:hover {
            background: #1f1b3a;
            color: #ffffff;
        }
    </style>
</head>
<body>

    <div class="matrix-box">
        <h2>Technical Skill Matrix</h2>

        <ol>
            <li>
                <strong>Software Development</strong>
                <ul>
                    <li class="skill-item">
                        <span id="s1">C (Systems Programming & Sockets)</span>
                        <button class="edit-btn" onclick="modifySkill('s1')">Edit</button>
                    </li>
                    <li class="skill-item">
                        <span id="s2">Java (Object-Oriented Development)</span>
                        <button class="edit-btn" onclick="modifySkill('s2')">Edit</button>
                    </li>
                </ul>
            </li>

            <li>
                <strong>Database Systems</strong>
                <ul>
                    <li class="skill-item">
                        <span id="s3">SQL (Relational Database Management)</span>
                        <button class="edit-btn" onclick="modifySkill('s3')">Edit</button>
                    </li>
                </ul>
            </li>
        </ol>

        <div class="nav-links">
             <a href="https://pavanmradder.github.io/SEM_4-FET/assignment/five.html"> Home page</a>
            <a href="https://pavanmradder.github.io/SEM_4-FET/assignment/html%20with%20cs/five_cs.html">View CSS Version</a>
        </div>
    </div>

    <script>
            function modifySkill(id) {
            const skill = document.getElementById(id);
       
            if (!skill) return;
       
            const currentText = skill.textContent;
       
            let updatedText = prompt("Edit skill:", currentText);
       
            // If user pressed cancel → do nothing
            if (updatedText === null) return;
       
            updatedText = updatedText.trim();
       
            // Prevent empty input
            if (updatedText === "") {
                alert("Skill cannot be empty!");
                return;
            }
       
            // Only update if changed
            if (updatedText !== currentText) {
                skill.textContent = updatedText;
            }
        }
    </script>

</body>
</html>
