/*
  Copyright 1999 ImageMagick Studio LLC, a non-profit organization
  dedicated to making software imaging solutions freely available.
  
  You may not use this file except in compliance with the License.  You may
  obtain a copy of the License at
  
    https://imagemagick.org/script/license.php
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  MagickCore image annotation methods.
*/
#ifndef MAGICKCORE_ANNOTATE_H
#define MAGICKCORE_ANNOTATE_H

#include "magick/draw.h"

#if defined(__cplusplus) || defined(c_plusplus)
extern "C" {
#endif

extern MagickExport MagickBooleanType
  AnnotateComponentGenesis(void),
  AnnotateImage(Image *,const DrawInfo *),
  GetMultilineTypeMetrics(Image *,const DrawInfo *,TypeMetric *),
  GetTypeMetrics(Image *,const DrawInfo *,TypeMetric *);

extern MagickExport ssize_t
  FormatMagickCaption(Image *,DrawInfo *,const MagickBooleanType,TypeMetric *,
    char **);

extern MagickExport void
  AnnotateComponentTerminus(void);

#if defined(__cplusplus) || defined(c_plusplus)
}
#endif

#endif
