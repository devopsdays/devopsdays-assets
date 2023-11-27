# devopsdays-assets

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
<img width="480" alt="image" src="https://github.com/jerdog/devopsdays-assets/assets/296864/6d33cb43-a974-4dcc-9ded-9c86d8d490b7">

3. Create a branch by selecting the branch dropdown, and typing in a branch for your changes, i.e. `jerdog/[year]-event-name-assets` where `[year]` is the event year
<img width="300" alt="image" src="https://github.com/jerdog/devopsdays-assets/assets/296864/2eb44739-2708-46a5-b230-a722ba8c85d7">

4. On your machine, create a folder for your city, i.e. `kansas-city`, and then place the file(s) you want to upload there
5. Select the **Add file** dropdown in the upper right, and select 
<img width="217" alt="image" src="https://github.com/jerdog/devopsdays-assets/assets/296864/4d01ff6a-8416-4246-ab1c-f084d4008d20">

5. Drag the **folder** that you created on your local machine to this window
<img width="600" alt="image" src="https://github.com/jerdog/devopsdays-assets/assets/296864/dd6bf4f6-b281-42bd-9148-9846be20f334">

6. Once uploaded, if you uploaded the **folder**, then you should see it displayed like this:
<img width="600" alt="image" src="https://github.com/jerdog/devopsdays-assets/assets/296864/cda3a4a5-eb5e-4137-9c72-ccdc1eef9570">

7. Add a commit message, something short but descriptive like `adding assets for [event name]`, select the `Commit directly to the <branch you created> branch` option, and select **Commit changes**
<img width="600" alt="image" src="https://github.com/jerdog/devopsdays-assets/assets/296864/aa1d129f-41d6-4ff7-a9e3-305fac256f5f">

8. You will be returned to your repo view, with a message displayed about your branch having recent pushes, and an option to **Compare & pull request**. Choose that option
<img width="600" alt="image" src="https://github.com/jerdog/devopsdays-assets/assets/296864/967771b4-7e63-4cfe-b5ff-6d5d45e62ed3">

9. You will now be at a screen to initiate the request to pull your changes into the main devopsdays assets repo. Fill out the Pull Request title following the format of `[city initials - year] <short descriptive title>`
<img width="600" alt="image" src="https://github.com/jerdog/devopsdays-assets/assets/296864/3b3a5972-7a9d-413b-b305-2b613d87cc13">

10. If the pull request is a draft, meaning you still have more to add, then select from the dropdown ***Create draft pull request***. Otherwise, choose ***Create pull request***
<img width="300" alt="image" src="https://github.com/jerdog/devopsdays-assets/assets/296864/f300197e-eb5b-4626-a72b-e4ac46dffed4">

Now your pull request is ready for the devopsdays staff to review and merge.
