from django.http import JsonResponse
from nltk import ngrams
from nltk.metrics import jaccard_distance

def generate_ngrams(string, n):
    return list(ngrams(string, n))

def ngram_comparison(string1, string2, n):
    ngrams1 = generate_ngrams(string1, n)
    ngrams2 = generate_ngrams(string2, n)

    jaccard_similarity = 1 - jaccard_distance(set(ngrams1), set(ngrams2))

    return jaccard_similarity

def handle_ngrams(request):
    string1 = request.GET.get('string1', None)
    string2 = request.GET.get('string2', None)

    if string1 is None or string2 is None:
        return JsonResponse({'error': 'Missing required parameter'})

    n = 2
    similarity = ngram_comparison(string1, string2, n)

    return JsonResponse({'similarity': similarity})

