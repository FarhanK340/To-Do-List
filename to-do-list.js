window.addEventListener('load', () => {
    const form = document.querySelector("#form-submit");
    const input = document.querySelector("#input-label");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const task = input.value;

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content")

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly")

        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement("div");
        task_action_el.classList.add("action");

        const edit_button = document.createElement("button")
        edit_button.classList.add("input-edit");
        edit_button.innerText = "Edit";

        const delete_button = document.createElement("button");
        delete_button.classList.add("input-delete");
        delete_button.innerText = "Delete";

        task_action_el.appendChild(edit_button);
        task_action_el.appendChild(delete_button);

        task_el.appendChild(task_action_el);

        list_el.appendChild(task_el);

        input.value = "";

        edit_button.addEventListener('click', (e) => {
            if (edit_button.innerText.toLowerCase() == "edit") {
                edit_button.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            }
            else {
                edit_button.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly")
            }
        });

        delete_button.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });
    });
});
