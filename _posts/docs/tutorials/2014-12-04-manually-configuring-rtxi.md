---
title: Manually Configuring RTXI
layout: post
categories: docs tutorials
---

You can manually configure RTXI with many options. For example, you can run
RTXI {{ site.rtxi_version }} using the RTAI rather than the default Xenomai,
and you can set up RTXI in non-real-time mode using the POSIX interface. You
may also direct RTXI to libraries/packages in non-standard locations. The full
configure options for are below:

{% highlight bash %}
configure' configures RTXI trunk to adapt to many kinds of systems.

Usage: ./configure [OPTION]... [VAR=VALUE]...

To assign environment variables (e.g., CC, CFLAGS...), specify them as
VAR=VALUE.  See below for descriptions of some of the useful variables.

Defaults for the options are specified in brackets.

Configuration:
  -h, --help              display this help and exit
      --help=short        display options specific to this package
      --help=recursive    display the short help of all the included packages
  -V, --version           display version information and exit
  -q, --quiet, --silent   do not print `checking...' messages
      --cache-file=FILE   cache test results in FILE [disabled]
  -C, --config-cache      alias for `--cache-file=config.cache'
  -n, --no-create         do not create output files
      --srcdir=DIR        find the sources in DIR [configure dir or `..']

Installation directories:
  --prefix=PREFIX         install architecture-independent files in PREFIX
                          [/usr/local]
  --exec-prefix=EPREFIX   install architecture-dependent files in EPREFIX
                          [PREFIX]

By default, `make install' will install all the files in
`/usr/local/bin', `/usr/local/lib' etc.  You can specify
an installation prefix other than `/usr/local' using `--prefix',
for instance `--prefix=$HOME'.

For better control, use the options below.

Fine tuning of the installation directories:
  --bindir=DIR            user executables [EPREFIX/bin]
  --sbindir=DIR           system admin executables [EPREFIX/sbin]
  --libexecdir=DIR        program executables [EPREFIX/libexec]
  --sysconfdir=DIR        read-only single-machine data [PREFIX/etc]
  --sharedstatedir=DIR    modifiable architecture-independent data [PREFIX/com]
  --localstatedir=DIR     modifiable single-machine data [PREFIX/var]
  --libdir=DIR            object code libraries [EPREFIX/lib]
  --includedir=DIR        C header files [PREFIX/include]
  --oldincludedir=DIR     C header files for non-gcc [/usr/include]
  --datarootdir=DIR       read-only arch.-independent data root [PREFIX/share]
  --datadir=DIR           read-only architecture-independent data [DATAROOTDIR]
  --infodir=DIR           info documentation [DATAROOTDIR/info]
  --localedir=DIR         locale-dependent data [DATAROOTDIR/locale]
  --mandir=DIR            man documentation [DATAROOTDIR/man]
  --docdir=DIR            documentation root [DATAROOTDIR/doc/rtxi]
  --htmldir=DIR           html documentation [DOCDIR]
  --dvidir=DIR            dvi documentation [DOCDIR]
  --pdfdir=DIR            pdf documentation [DOCDIR]
  --psdir=DIR             ps documentation [DOCDIR]

Program names:
  --program-prefix=PREFIX            prepend PREFIX to installed program names
  --program-suffix=SUFFIX            append SUFFIX to installed program names
  --program-transform-name=PROGRAM   run sed PROGRAM on installed program names

X features:
  --x-includes=DIR    X include files are in DIR
  --x-libraries=DIR   X library files are in DIR

System types:
  --build=BUILD     configure for building on BUILD [guessed]
  --host=HOST       cross-compile to build programs to run on HOST [BUILD]

Optional Features:
  --disable-option-checking  ignore unrecognized --enable/--with options
  --disable-FEATURE       do not include FEATURE (same as --enable-FEATURE=no)
  --enable-FEATURE[=ARG]  include FEATURE [ARG=yes]
  --enable-shared[=PKGS]  build shared libraries [default=yes]
  --enable-static[=PKGS]  build static libraries [default=yes]
  --enable-fast-install[=PKGS]
                          optimize for fast installation [default=yes]
  --disable-dependency-tracking  speeds up one-time build
  --enable-dependency-tracking   do not reject slow dependency extractors
  --disable-libtool-lock  avoid locking (might break parallel builds)
  --enable-xenomai        build the Xenomai interface
  --enable-posix          build the POSIX non-RT interface
  --enable-debug          turn on debugging
  --enable-comedi         build the comedi driver
  --enable-analogy        build the analogy driver
  --enable-ni             build the ni driver
  --enable-clampprotocol     build the clamp protocol module (default=enabled)

Optional Packages:
  --with-PACKAGE[=ARG]    use PACKAGE [ARG=yes]
  --without-PACKAGE       do not use PACKAGE (same as --with-PACKAGE=no)
  --with-cppunit-prefix=PFX   Prefix where CppUnit is installed (optional)
  --with-cppunit-exec-prefix=PFX  Exec prefix where CppUnit is installed (optional)
  --with-pic              try to use only PIC/non-PIC objects [default=use
                          both]
  --with-gnu-ld           assume the C compiler uses GNU ld [default=no]
  --with-x                use the X Window System
  --with-Qt-dir=DIR       DIR is equal to $QTDIR if you have followed the
                          installation instructions of Trolltech. Header files
                          are in DIR/include, binary utilities are in DIR/bin.
                          The library is in DIR/lib, unless --with-Qt-lib-dir
                          is also set.
  --with-Qt-include-dir=DIR
                          Qt header files are in DIR
  --with-Qt-bin-dir=DIR   Qt utilities such as moc and uic are in DIR
  --with-Qt-lib-dir=DIR   The Qt library is in DIR
  --with-Qt-lib=LIB       Use -lLIB to link with the Qt library
  --with-rtai-config=FILE location of the rtai-config program

Some influential environment variables:
  CC          C compiler command
  CFLAGS      C compiler flags
  LDFLAGS     linker flags, e.g. -L if you have libraries in a
              nonstandard directory 
  LIBS        libraries to pass to the linker, e.g. -l
  CPPFLAGS    C/C++/Objective C preprocessor flags, e.g. -I if
              you have headers in a nonstandard directory 
  CPP         C preprocessor
  CXX         C++ compiler command
  CXXFLAGS    C++ compiler flags
  CXXCPP      C++ preprocessor
  XMKMF       Path to xmkmf, Makefile generator for X Window System
{% endhighlight %}
