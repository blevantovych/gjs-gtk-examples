#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("ToolPavarte");
window.set_default_size(200, 200);
window.connect("destroy", Gtk.main_quit);

var toolpavarte = new Gtk.ToolPavarte();
toolpavarte.set_icon_size(Gtk.IconSize.LARGE_TOOLBAR);
window.add(toolpavarte);

var toolitemgroup = new Gtk.ToolItemGroup({label: "Group 1"});
toolpavarte.add(toolitemgroup);

var toolbutton = new Gtk.ToolButton({label: "New"});
toolbutton.set_icon_name("gtk-new");
toolitemgroup.add(toolbutton);
var toolbutton = new Gtk.ToolButton({label: "Open"});
toolbutton.set_icon_name("gtk-open");
toolitemgroup.add(toolbutton);
var toolbutton = new Gtk.ToolButton({label: "Save"});
toolbutton.set_icon_name("gtk-save");
toolitemgroup.add(toolbutton);

var toolitemgroup = new Gtk.ToolItemGroup({label: "Group 2"});
toolpavarte.add(toolitemgroup);

var toolbutton = new Gtk.ToolButton({label: "Find"});
toolbutton.set_icon_name("gtk-find");
toolitemgroup.add(toolbutton);
var toolbutton = new Gtk.ToolButton({label: "Undo"});
toolbutton.set_icon_name("gtk-undo");
toolitemgroup.add(toolbutton);
var toolbutton = new Gtk.ToolButton({label: "Redo"});
toolbutton.set_icon_name("gtk-redo");
toolitemgroup.add(toolbutton);

window.show_all();

Gtk.main();
