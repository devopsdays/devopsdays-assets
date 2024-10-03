# devopsdays-assets

[![Netlify Status](https://api.netlify.com/api/v1/badges/88b5fa6c-153e-4488-a048-a8b6161d1f1b/deploy-status)](https://app.netlify.com/sites/devopsdays-assets/deploys)

This repository is a location for larger binary files that can be referenced by pages on the devopsdays.org website but aren't served up directly.

Once files are merged into this repo, you can access them at `https://assets.devopsdays.org/PATH_TO_FILES` (example: `https://assets.devopsdays.org/events/2020/chicago/2020-chicago-devopsdays-prospectus.pdf`)

If you would like to host your prospectus, or other large PDF files that describe your event, please place them in this repository and link to them from your page.

Please note that this repo isn't intended to hold speakers' slides. Numerous more-suitable slide hosting and file hosting options exist. Supported options are [documented in the theme reference](https://github.com/devopsdays/devopsdays-web/blob/master/themes/devopsdays-theme/REFERENCE.md#talk-page-fields).

## Adding assets

To add your events assets without downloading the entire repo, follow these steps via the GitHub GUI

**Requirements:**
- You will need a [GitHub](https://github.com/) account, and be logged in
- You will need to have the files you want to upload on your machine

**Steps**

1. Fork the main repo to your GitHub account
2. Navigate to the `events` and the `[year]` for your event

![image showing events and year folder](/images/step2.png)

3. Create a branch by selecting the branch dropdown, and typing in a branch for your changes, i.e. `jerdog/[year]-event-name-assets` where `[year]` is the event year

![image new branch dropdown](/images/step3.png)

4. On your machine, create a folder for your city, i.e. `kansas-city`, and then place the file(s) you want to upload there
5. Select the **Add file** dropdown in the upper right, and select 

![image showing the add file dropdown](/images/step5.png)

6. Drag the **folder** that you created on your local machine to this window. Once uploaded, if you uploaded the **folder**, then you should see it displayed like this:

![image showing upload window with files deposited](/images/step6.png)

7. Add a commit message, something short but descriptive like `adding assets for [event name]`, select the `Commit directly to the <branch you created> branch` option, and select **Commit changes**

![image showing the commit message](/images/step7.png)

8. You will be returned to your repo view, with a message displayed about your branch having recent pushes, and an option to **Compare & pull request**.... Choose that option.

![image compare and pull request button](/images/step8.png)

9. You will now be at a screen to initiate the request to pull your changes into the main devopsdays assets repo. Fill out the Pull Request title following the format of `[city initials - year] <short descriptive title>`

![image open pull request window](/images/step9.png)

10.  If the pull request is a draft, meaning you still have more to add, then select from the dropdown ***Create draft pull request***. Otherwise, choose ***Create pull request***

![image create pull request drop down](/images/step10.png)

Now your pull request is ready for the devopsdays staff to review and merge.

![image open pull request window](/images/step-done.png)
