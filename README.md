# NULondon DocProcessor

## Product Features:

- **View and filter all available NULondon undergraduate courses**
- **See the assessment types for each course, as well as available versions**
- **Create new version of each assessment type by filling out a form for all of the required info**
- **Export a `.docx` of any template version desired**
- **Request approval for a draft verssion directly through email**
- **Approve or reject versions**

## Outstanding Issues / Future Features:

- **Sign in + Authentication with Northeastern SSO**
  There is no sign-in process as us students do not have access to Northeastern's SSO system. At the moment we simply have valid users hardcoded into our database, and eventually we want this to be updated whenever a professor logs in using SSO. 
- **Modify assessment list as user**
  Assesssments are webscraped directly from the NULondon course webpages, and cannot be changed through user actions. We want to allow professors to create drafts for new types of assessment lists as well as modify the list overall.
- **Complete full approval process within the browser, not just through email link**
  Approval can only be performed by clicking a specific link found in the user's email. Once sign-in is implemented, the goal is to have this process completely within the browser, so that drafting, requesting approval, and approving can all happen on our website.
- **Export assessment versions as PDF or Google Doc**
  We can only export template versions as `.docx` files. It would be nice to be able to export as `.pdf` or directly create a Google Doc after connecting with Google.
- **Validate user-inputted template values**
  Users can generally put whatever values they want into the template, even if those values do not make sense in context. 
- **Approval through multiple methods**
  Although approvals can be requested from multiple people, only one of them needs to approve the draft. We want to give the option to require approvals from multiple different approvers, as well as the option to require one approval from a set group of approvers.
- **Permit professors to only create template versions for classes they teach**
  All users can create template versions for any class. This should be modified to only give them permission to create versions for classes they actually teach.
- **Show more fields on the approval page**
  Not all fields are being shown on the current approval page, due to time constraints. 
- **Pre-filled template versions**
  When making new template versions, they appear blank. They should instead retrieve information from what was there in the previous version (if existing).
- **Streamline webscraping**
  The webscraping script was made quickly to get started with testing, thus it is also not clean enough to be used in the long run. Needs to be improved to be able to handle malformed websites more effectively, as well as be able to update existing data instead of only create. Can also be automated in the future to run periodically. 
- **Database field types**
  To accommodate the webscraping, the Courses table's field types are mostly `strings` or `ints`. Some of them make sense as these types, some of them don't, and we want to eventually change that.
- **Template version database storage**
  For convenience, we decided to keep using MySQL as the storage for our template version documents. But, it is *probably* better to use a NoSQL database like MongoDB, for example. 
- **Add courses for other NULondon programs as well**
  Only shows undergraduate courses. Can eventually branch out to postgraduate courses, the apprenticeship courses, and the other categories found on the [NULondon Programme Specifications and Handbooks](https://www.nulondon.ac.uk/academic-handbook/programme-specifications-and-handbooks/) page.
- **Documentation / Code cleanup**
  Very little commenting / external docs on what the code does. Also things like style and naming conventions are not standardized throughout.