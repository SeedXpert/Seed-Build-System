#!/usr/bin/env ruby


# Seed-Build-System®
# -----------------------------------------
# From the Desk of Sequømics Corporation.
# -----------------------------------------
#     	   With ♥ by Prabhat Kumar.
# -----------------------------------------
# @author     : Prabhat Kumar.
# @copyright  : Sequømics Corporation.
# @homepage   : http://sequomics.com/.
# @require    : Ruby
# @require    : Sass
# @require    : Compass
# @version    : 1.0.0
# @build      : Örebro
# @date       : 08-Nov-2016
# @license    : Apache, version 2.0
# -----------------------------------------
# Principle   : Standard Module Definition
# -----------------------------------------

# -------------------------------------- //
#         Using @mixin directive         //
#                  ~   ~                 //
#                 (.) (.)                //
#                    -                   //
#                  `\^/`                 //
#        @author : Prabhat Kumar         //
#          @date : 08-Nov-2016           //
# -------------------------------------- //


# Sass - (3.4.21)     : Selective Steve
# Compass - (v1.0.3)  : Polaris

# Require compass plugin:
require 'compass/import-once/activate'

# Setting the root path of project:
http_path       = "/"
css_dir         = "source/core/style"
sass_dir        = "source/core/scss"
images_dir      = "source/core/images"
javascripts_dir = "source/core/script"

# Preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style    = :expanded

# To enable relative paths to assets via compass helper functions:
relative_assets = true

# To disable debugging comments that display the original location of the selectors:
# options: true || false
line_comments   = true

# Preference for the indented syntax, to regenerate this project again,
# Pass: --syntax sass, or uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

# Usage: $ compass version
# ------------------------
# Usage: $ compass compile
# Usage: $ compass watch
# ------------------------
# Usage: $ compass compile --production
# Usage: $ compass compile --sourcemap
# -----------------EOF-------------//-
