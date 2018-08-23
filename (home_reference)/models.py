#from django.db import models
#
#from wagtail.core.models import Page
#from wagtail.core.fields import RichTextField
#from wagtail.admin.edit_handlers import FieldPanel
#
#
#class HomePage(Page):
#    body = RichTextField(blank=True)
#
#    content_panels = Page.content_panels + [
#        FieldPanel('body', classname="full"),
#    ]


from django.db import models

from modelcluster.fields import ParentalKey

from wagtail.core.models import Page, Orderable
from wagtail.core.fields import RichTextField, StreamField
from wagtail.core import blocks
from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel, MultiFieldPanel, InlinePanel
from wagtail.images.blocks import ImageChooserBlock

from wagtail.documents.models import Document
from wagtail.documents.edit_handlers import DocumentChooserPanel


class HomePage(Page):    
    
    # add more variable called item_entries to the homepage
    # https://docs.wagtail.io/en/v2.1.2/topics/pages.html
    # using get_context function
    
    item = StreamField([
        ('textitem', blocks.StructBlock([
            ('text', blocks.RichTextBlock(blank=True)),
            ('link', blocks.URLBlock(required=False)),
            ], icon='cogs')),

        ('imageitem', blocks.StructBlock([
            ('image', ImageChooserBlock()),
            ('link', blocks.URLBlock(required=False)),
            ], icon='cogs')),
    ], blank=True)
    
    content_panels = Page.content_panels + [  
        StreamFieldPanel('item'),       
    ]
    

# need to make a template too
# use inline models    
#class Slideshow(Orderable): # need to check what is the input
#    template = 'slideshow.html'    
#    slideshow_item = ParentalKey(HomePage, on_delete=models.CASCADE)
#    external_link = 
#    def prev_slideshow_item(self):
#        pass
#    
#    def next_slideshow_item(self):
#        pass
#    
    
     
    
    
    
    
    
    
    
    
    

