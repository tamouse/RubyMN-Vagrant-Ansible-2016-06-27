---
layout: slide

---

<section>

## Changing Variables

* The variables for the project are contained under `provisioning/group_vars/` directory, named for the environment.

* These files can be plain text, for environments you don't need to keep secure.

* Or they can be encrypted vault files when you do need to keep them secure. A vaulted file could be checked in to Github, for example.

</section>

<section>

* In our case, we had a whole pile of variables, but most of them were already set during the thor script execution as we keep things fairly standard across projects.

* Things like the application name, database names, paths to ruby, rails, and other tools are all standardly placed, and enumerated as variables in the scripts.

* We wanted to keep this as similar as possible to reduce the time it takes to train people up moving from project to project.


</section>


<section>

## Our Convention was embedded in our Configuration

</section>
