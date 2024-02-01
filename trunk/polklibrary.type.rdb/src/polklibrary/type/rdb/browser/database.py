from plone import api
from Products.Five import BrowserView
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile


class DatabaseView(BrowserView):

    template = ViewPageTemplateFile("database.pt")
    
    def __call__(self):
        return self.template()

    @property
    def portal(self):
        return api.portal.get()
        
        
class DatabaseProxy(BrowserView):

    def __call__(self):
        return self.request.response.redirect(self.context.getRemoteUrl, status=301)

        