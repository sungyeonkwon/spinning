# from django.db import models

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