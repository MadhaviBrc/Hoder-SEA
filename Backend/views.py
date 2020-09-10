from rest_framework.parsers import FileUploadParser
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework import viewsets
from django.db.models import Q

class Academic_yearsListCreate(generics.ListCreateAPIView):
    queryset = Academic_years.objects.all()
    serializer_class = Academic_yearsSerializer

class DetailAcademic_years(generics.RetrieveUpdateDestroyAPIView):
    queryset = Academic_years.objects.all()
    serializer_class = Academic_yearsSerializer

class InfrastructureListCreate(generics.ListCreateAPIView):
    queryset = Infrastructure.objects.all()
    serializer_class = InfrastructureSerializer

class DetailInfrastructure(generics.RetrieveUpdateDestroyAPIView):
    queryset = Infrastructure.objects.all()
    serializer_class = InfrastructureSerializer

class BranchListCreate(generics.ListCreateAPIView):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer

class DetailBranch(generics.RetrieveUpdateDestroyAPIView):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer

class ClassListCreate(generics.ListCreateAPIView):
    queryset = Class.objects.all()
    serializer_class = ClassSerializer

class DetailClass(generics.RetrieveUpdateDestroyAPIView):
    queryset = Class.objects.all()
    serializer_class = ClassSerializer

class SectionListCreate(generics.ListCreateAPIView):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer

class DetailSection(generics.RetrieveUpdateDestroyAPIView):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer

class SubjectListCreate(generics.ListCreateAPIView):
    queryset = Subjects.objects.all()
    serializer_class = SubjectSerializer

class DetailSubject(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subjects.objects.all()
    serializer_class = SubjectSerializer

class SyllabusListCreate(generics.ListCreateAPIView):
    queryset = Syllabus.objects.all()
    serializer_class = SyllabusSerializer

class DetailSyllabus(generics.RetrieveUpdateDestroyAPIView):
    queryset = Syllabus.objects.all()
    serializer_class = SyllabusSerializer

class Sub_chapterListCreate(generics.ListCreateAPIView):
    queryset = Sub_chapter.objects.all()
    serializer_class = Sub_chapterSerializer

class DetailSub_chapter(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sub_chapter.objects.all()
    serializer_class = Sub_chapterSerializer

class Hobby_clubListCreate(generics.ListCreateAPIView):
    queryset = Hobby_club.objects.all()
    serializer_class = Hobby_clubSerializer

class DetailHobby_club(generics.RetrieveUpdateDestroyAPIView):
    queryset = Hobby_club.objects.all()
    serializer_class = Hobby_clubSerializer

class Hobby_assign_classListCreate(generics.ListCreateAPIView):
    queryset = Hobby_assign_class.objects.all()
    serializer_class = Hobby_assign_classSerializer

class DetailHobby_assign_class(generics.RetrieveUpdateDestroyAPIView):
    queryset = Hobby_assign_class.objects.all()
    serializer_class = Hobby_assign_classSerializer

class ClassViewSet(viewsets.ModelViewSet):
    queryset = Class.objects.all()
    serializer_class = ClassSerializer

    def list(self, request, *args, **kwargs):
        data = request.data.get("items") if 'items' in request.data else request.data
        many = isinstance(data, list)
        print (data, many)
        serializer = self.get_serializer(data=data, many=many)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
@api_view(['GET'])
def UniversityList(request):
    if request.method == 'GET':
        data = Infrastructure.objects.all().filter(i_university=0)
        serializer = InfrastructureSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def GroupsList(request):
    if request.method == 'GET':
        data = Infrastructure.objects.all().filter(~Q(i_university=0))
        serializer = InfrastructureSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def GroupList(request,pk):
    if request.method == 'GET':
        data = Infrastructure.objects.all().filter(i_university = pk)
        serializer = InfrastructureSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
