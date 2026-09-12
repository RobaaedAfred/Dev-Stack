#  Development Stack Builder

A modern and responsive web application that helps developers build their ideal development stack. Users can explore different technologies such as frontend, backend, database, and development tools, and select the technologies they want to include in their stack.

## 🚀 Technologies Used

* **React**
* **TypeScript**
* **Tailwind CSS**
* **Vite**
* **JavaScript / JSX**
* **JSON**


## ✨ Features

### 1. 🧩 Build Your Own Stack

Users can select technologies and add them to their personal development stack.

### 2. 🔄 Dynamic Technology Data

Technology information is loaded dynamically from a JSON.

### 3. 📱 Responsive Design

The application is designed with Tailwind CSS and works well on desktop, tablet, and mobile screens.

---

# ⚛️ React Questions & Answers

1.What is JSX, and why is it used in React?
Ans: JSX is a syntax like Html written under React project.

2.What is the difference between props and state?
Ans:Props are data passed from one component to other component. And state is to use for change some value on real time.

3What does the useState hook do, and where did you use it in this project?
Ans: useState is used to store and update data inside component.

4.What does the useEffect hook do, and why did you need it to load the JSON data?
Ans:useEffect hook is use for load data from JSON file.

5.Why does every item in a .map() list need a unique key prop?
Ans: Because in react each item in the list need to identify uniquely to perform add,remove or any other change -thats why .map() need unique key. 

6.What is conditional rendering? Show one place you used it (example: the empty stack message).
Ans: Conditional rendering  showing different UI depending on a condition.
      <div className="rounded-2xl border border-slate-200 bg-white p-6 h-fit">
                <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
                <p className="mt-1 text-sm text-slate-400">
                    {stack.length === 0 ? 'No technologies selected yet.' : `${stack.length} Technology Selected`}
                </p>

                {stack.length === 0 ? (
                    <div className="mt-4 flex h-24 items-center justify-center rounded-xl border border-dashed border-slate-200 text-sm text-slate-300">
                        Your stack is empty
                    </div>
                ) : (
                    <>
                        <div className="mt-4 space-y-2">
                            {stack.map((tech) => (
                                <div
                                    key={tech.id}
                                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2"
                                >
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="h-6 w-6 object-contain"
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-gray-800">
                                                {tech.name}
                                            </p>
                                            <p className="text-xs text-slate-400">
                                                {tech.category}
                                            </p>
                                        </div>
7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans: A parent sends data to a child using props.

<Card technology={technology} />

The child can send something back by calling a function passed from the parent as a prop.

<Card
  technology={technology}
  onAdd={handleAdd}
/>