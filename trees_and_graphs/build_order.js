/* Question 4.7
Build Order: You are given a list of projects and a list of dependencies
(which is a list of pairs of projects, where the second project is dependent on the first project).
All of a project's dependencies must be built before the project is.
Find a build order that will allow the projects to be built.
If there is no valid build order, return an error.
*/

// Time is O(P + D) where P is the number of projects and D is the number of dependency pairs,
// Space is O(P + D)
function buildOrder(projects, dependencies) {
    const Project = {
        State: {
            BLANK: 'BLANK',
            PARTIAL: 'PARTIAL',
            COMPLETE: 'COMPLETE',
        },
    };
    const projectState = new Map();

    // build dependency graph: Map of lists
    const childMap = new Map();
    for (const i in projects) {
        const project = projects[i];
        childMap.set(project, []);
        projectState.set(project, Project.State.BLANK);
    }

    // add dependencies
    for (const i in dependencies) {
        const d = dependencies[i];
        childMap.get(d[0]).push(d[1]);
    }

    // perform DFS
    const stack = new Stack();
    for (const i in projects) {
        const project = projects[i];
        if (projectState.get(project) === Project.State.BLANK) {
            if (!dfs(project, stack, projectState, Project, childMap)) {
                return null;
            }
        }
    }

    return stack;
}

function dfs(project, stack, projectState, Project, childMap) {
    if (projectState.get(project) === Project.State.PARTIAL) {
        return false; // cycle
    }

    if (projectState.get(project) === Project.State.BLANK) {
        projectState.set(project, Project.State.PARTIAL);
        const children = childMap.get(project);
        for (const i in children) {
            const child = children[i];
            if (!dfs(child, stack, projectState, Project, childMap)) {
                return false;
            }
        }
        projectState.set(project, Project.State.COMPLETE);
        stack.push(project);
    }

    return true;
}

/* Note
Use Topological Sort: linearly ordering the vertices in a graph
such that for every edge (a, b), a appears before b in the linear order.
*/

const Stack = require('../data_structures/Stack');

const a = 'a';
const b = 'b';
const c = 'c';
const d = 'd';
const e = 'e';
const f = 'f';
const projects = [a, b, c, d, e, f];
const dependencies = [[a, d], [f, b], [b, d], [f, a], [d, c]];

const stack = buildOrder(projects, dependencies);
// convert stack to list for readability
const result = [];
while (!stack.isEmpty()) {
    result.push(stack.pop());
}
console.log(result); // [ 'f', 'e', 'b', 'a', 'd', 'c' ]