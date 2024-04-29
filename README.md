## Alex’s Kitchen
### Branch naming convention:hotfix/bug-inventory-crash
## pull request (PR) and merge
#### 1.Commit and Push Changes: 
##### git add . && git commit -m "Fix bug causing inventory crash" && git push origin hotfix/bug-inventory-crash
#### 2.Create Pull Request (PR): we have Go to the repository on GitHub, and need to create a new pull request from  hotfix branch to the production branch and Provide a clear title and description for the PR, summarizing the changes and explaining why the hotfix is necessary.
#### 3.Merge PR: Once  PR has received approval from the necessary reviewers and any required checks have passed, we can merge it into the production branch.
#### 4.Resolve Merge Conflicts (if any): If there are any merge conflicts between hotfix branch and the production branch, resolve them locally by checking out the production branch, pulling the latest changes, and then merging your hotfix branch into it.

##### git checkout production
##### git pull origin production
##### git merge hotfix/bug-inventory-crash

# Digital Kitchen

## Approach

1. **Iterate Through Menu Collections**: 
   - Loop through each menu collection object in the array.

2. **Loop Through Categories**: 
   - For each menu collection, iterate through its categories array.

3. **Match IDs**: 
   - Compare the IDs in the `menuItemsIds` array of each category with the IDs of the items in the `menuItems` array.

4. **Extract Items**: 
   - If there's a match, extract the corresponding menu item from the `menuItems` array and associate it with the category.

5. **Repeat**: 
   - Continue this process for all menu collections and categories.

6. **Organize Data**: 
   - Store or organize the extracted items based on their categories.

### code link : https://github.com/noman62/frontEnd-task.git
