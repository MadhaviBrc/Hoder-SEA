from django.urls import path,re_path,include
from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static 
from . import views

urlpatterns = [

    path('auth/' , include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),

    path('api/academic/', views.Academic_yearsListCreate.as_view() ),
    path('api/academic/<int:pk>/', views.DetailAcademic_years.as_view()),

    path('api/infrastructure/', views.InfrastructureListCreate.as_view() ),
    path('api/infrastructure/<int:pk>/', views.DetailInfrastructure.as_view()),

    path('api/branch/', views.BranchListCreate.as_view() ),
    path('api/branch/<int:pk>/', views.DetailBranch.as_view()),

    path('api/class/', views.ClassListCreate.as_view() ),
    path('api/class/<int:pk>/', views.DetailClass.as_view()),

    path('api/section/', views.SectionListCreate.as_view() ),
    path('api/section/<int:pk>/', views.DetailSection.as_view()),

    path('api/subject/', views.SubjectListCreate.as_view() ),
    path('api/subject/<int:pk>/', views.DetailSubject.as_view()),

    path('api/syllabus/', views.SyllabusListCreate.as_view() ),
    path('api/syllabus/<int:pk>/', views.DetailSyllabus.as_view()),

    path('api/sub_chapter/', views.Sub_chapterListCreate.as_view() ),
    path('api/sub_chapter/<int:pk>/', views.DetailSub_chapter.as_view()),

    path('api/hobby_club/', views.Hobby_clubListCreate.as_view() ),
    path('api/hobby_club/<int:pk>/', views.DetailHobby_club.as_view()),

    path('api/university_list/', views.UniversityList),
    path('api/group_list/', views.GroupsList),
    path('api/group_list/<int:pk>/', views.GroupList),
    path('api/classmulti/', views.ClassViewSet.as_view({'post':'list'})),

]

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,
                              document_root=settings.MEDIA_ROOT)