from django.db import models

# Create your models here.
from modelcluster.fields import ParentalKey
from modelcluster.contrib.taggit import ClusterTaggableManager
from taggit.models import TaggedItemBase

from wagtail.core.models import Page, Orderable
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel, InlinePanel, MultiFieldPanel
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.search import index


class WordIndexPage(Page):

    def get_context(self, request):
        # Update context to include only published posts, ordered by reverse-chron
        context = super().get_context(request)
        wordpages = self.get_children().live().order_by('-first_published_at')
        context['wordpages'] = wordpages
        return context
    
class WordPage(Page):
    sentence = RichTextField(blank=True)
    dictlink = models.URLField("Dictionary Link")
    
    search_fields = Page.search_fields + [
        index.SearchField('sentence'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('sentence'),
        FieldPanel('dictlink'),
    ]

