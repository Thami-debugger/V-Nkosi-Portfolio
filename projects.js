(function () {
    const projectData = window.portfolioProjectData;
    const featuredGrid = document.getElementById("featuredProjectGrid");
    const moreGrid = document.getElementById("moreProjectGrid");

    if (!projectData) {
        console.error("Portfolio project data could not be loaded.");
        return;
    }
    if (!featuredGrid || !moreGrid) {
        console.error("Portfolio project grids are missing from this page.");
        return;
    }

    function appendText(parent, tagName, className, text) {
        const element = document.createElement(tagName);
        if (className) {
            element.className = className;
        }
        element.textContent = text;
        parent.appendChild(element);
        return element;
    }

    function addList(card, title, items, className) {
        if (!items || items.length === 0) {
            return;
        }

        const section = document.createElement("div");
        section.className = "project-card-detail";
        appendText(section, "h4", "", title);
        const list = document.createElement("ul");
        list.className = className || "";
        items.forEach(function (item) {
            appendText(list, "li", "", item);
        });
        section.appendChild(list);
        card.appendChild(section);
    }

    function addTags(card, title, items) {
        if (!items || items.length === 0) {
            return;
        }

        const section = document.createElement("div");
        section.className = "project-card-detail";
        appendText(section, "h4", "", title);
        const tags = document.createElement("ul");
        tags.className = "project-tag-list";
        items.forEach(function (item) {
            appendText(tags, "li", "project-tag", item);
        });
        section.appendChild(tags);
        card.appendChild(section);
    }

    function makeLink(label, url, className) {
        const link = document.createElement("a");
        link.className = className || "btn btn-secondary";
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = label;
        return link;
    }

    function makeCard(project, isFeatured) {
        const card = document.createElement("article");
        card.className = "project-card" + (isFeatured ? " featured-project-card" : "");
        card.id = "project-" + project.id;
        card.dataset.categories = [project.category].concat(project.secondaryCategories || []).join("|");

        if (project.imageUrl) {
            const previewLink = makeLink("", project.imageUrl, "project-card-preview");
            previewLink.setAttribute("aria-label", "Open screenshot for " + project.title);
            const image = document.createElement("img");
            image.src = project.imageUrl;
            image.alt = project.imageAlt || "";
            image.loading = "lazy";
            image.decoding = "async";
            image.addEventListener("error", function () {
                previewLink.remove();
                console.warn("Project preview image could not be loaded: " + project.title);
            });
            previewLink.appendChild(image);
            card.appendChild(previewLink);
        }

        const content = document.createElement("div");
        content.className = "project-card-content";
        const categories = [project.category].concat(project.secondaryCategories || []);
        const categoryList = document.createElement("ul");
        categoryList.className = "project-category-list";
        categoryList.setAttribute("aria-label", "Project categories");
        categories.forEach(function (category) {
            appendText(categoryList, "li", "project-category", category);
        });
        content.appendChild(categoryList);
        appendText(content, "h3", "project-card-title", project.title);
        if (project.aliases && project.aliases.length) {
            appendText(content, "p", "project-aliases", "Also known as: " + project.aliases.join(", "));
        }
        if (project.problem) {
            const problem = document.createElement("p");
            problem.className = "project-card-problem";
            const label = document.createElement("strong");
            label.textContent = "Problem: ";
            problem.appendChild(label);
            problem.appendChild(document.createTextNode(project.problem));
            content.appendChild(problem);
        }
        appendText(content, "p", "project-card-description", project.description);
        addList(content, "Implemented features", project.features);
        addTags(content, "Technology", project.technologies);

        if (project.status) {
            appendText(content, "p", "project-status-note", project.status);
        }

        const actions = document.createElement("div");
        actions.className = "project-card-actions";
        if (project.demoUrl) {
            actions.appendChild(makeLink("Live demo", project.demoUrl, "btn"));
        }
        if (project.sourceUrl) {
            actions.appendChild(makeLink("Source code", project.sourceUrl, "btn btn-secondary"));
        }
        (project.resources || []).forEach(function (resource) {
            actions.appendChild(makeLink(resource.label, resource.url, "btn btn-secondary"));
        });
        if (actions.childElementCount) {
            content.appendChild(actions);
        }
        card.appendChild(content);
        return card;
    }

    function renderProjects(container, projects, isFeatured) {
        projects.forEach(function (project) {
            container.appendChild(makeCard(project, isFeatured));
        });
    }

    renderProjects(featuredGrid, projectData.featured, true);
    renderProjects(moreGrid, projectData.more, false);

    const searchInput = document.getElementById("projectSearch");
    const categorySelect = document.getElementById("projectCategory");
    const resultCount = document.getElementById("projectResultCount");

    if (!searchInput || !categorySelect || !resultCount) {
        console.error("Project search and category controls are missing from this page.");
        return;
    }

    const categories = Array.from(new Set(projectData.more.reduce(function (all, project) {
        return all.concat([project.category], project.secondaryCategories || []);
    }, []))).sort();

    categories.forEach(function (category) {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    function updateProjectResults() {
        const query = searchInput.value.trim().toLowerCase();
        const selectedCategory = categorySelect.value;
        let visibleCount = 0;

        Array.from(moreGrid.children).forEach(function (card, index) {
            const project = projectData.more[index];
            const projectCategories = [project.category].concat(project.secondaryCategories || []);
            const searchableText = [
                project.title,
                project.description,
                project.problem,
                project.aliases || [],
                project.features || [],
                project.technologies || [],
                projectCategories
            ].flat().join(" ").toLowerCase();
            const matchesCategory = selectedCategory === "all" || projectCategories.includes(selectedCategory);
            const matchesQuery = !query || searchableText.includes(query);
            card.hidden = !(matchesCategory && matchesQuery);
            if (!card.hidden) {
                visibleCount += 1;
            }
        });

        resultCount.textContent = "Showing " + visibleCount + " of " + projectData.more.length + " projects";
    }

    searchInput.addEventListener("input", updateProjectResults);
    categorySelect.addEventListener("change", updateProjectResults);
    updateProjectResults();
}());
