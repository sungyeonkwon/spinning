from django.conf.urls import include, url
from django.contrib import admin

from django.urls import path, re_path, include

from wagtail.admin import urls as wagtailadmin_urls
from wagtail.documents import urls as wagtaildocs_urls
from wagtail.core import urls as wagtail_urls

# for media: Finally, your project needs to be set up to serve user-uploaded files from MEDIA_ROOT. Your Django project may already have this in place, but if not, add the following snippet to urls.py:
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^django-admin/', admin.site.urls),
    url(r'^', include('home.urls')),
    ## above is sampleapp url pattern that I probably want to delete
    re_path(r'^admin/', include(wagtailadmin_urls)),
    re_path(r'^documents/', include(wagtaildocs_urls)),
    # re_path(r'^pages/', include(wagtail_urls)),
    url(r'', include(wagtail_urls)),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


